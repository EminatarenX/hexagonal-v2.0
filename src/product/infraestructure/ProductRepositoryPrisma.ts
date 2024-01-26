import { PrismaClient } from "@prisma/client";
import { IProductRepository } from "../dominio/IProductRepository";
import { Product } from "../dominio/product";

export class ProductRepositoryPrisma implements IProductRepository {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }

    async save(product: Product): Promise<Product> {
        const ProductSaved = await this.prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock
            }
        })

        return new Product(
            ProductSaved.name,
            ProductSaved.description ?? '',
            ProductSaved.price,
            ProductSaved.stock,
            ProductSaved.id,
            ProductSaved.createdAt,
            ProductSaved.updatedAt
        );
    }

    async update(product: Product): Promise<Product> {
        const updatedProduct =  await this.prisma.product.update({
            where: {
                id: product.id
            },
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock
            }
        })
        return new Product(
            updatedProduct.name,
            updatedProduct.description ?? '',
            updatedProduct.price,
            updatedProduct.stock,
            updatedProduct.id,
            updatedProduct.createdAt,
            updatedProduct.updatedAt
        );
    }

    async findById(id: string) : Promise<Product> {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            }
        })
        return product ? new Product(
            product.name,
            product.description ?? '',
            product.price,
            product.stock,
            product.id,
            product.createdAt,
            product.updatedAt
        ) : new Product('', '', 0, 0);
    }

    async findAll(): Promise<Product[]> {
        const products = await this.prisma.product.findMany()
        return products.map(product => new Product(
            product.name,
            product.description ?? '',
            product.price,
            product.stock,
            product.id,
            product.createdAt,
            product.updatedAt
        ));
    }

    async delete(id: string): Promise<void>{
        await this.prisma.product.delete({
            where: {
                id
            }
        })
    }
}