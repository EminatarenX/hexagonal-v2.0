import { IProductRepository } from "../../../interfaces/ports/product/IProductRepository";
import { Product } from "../../../domain/product/product";
import { PrismaClient } from "@prisma/client";

export class ProductRepositoryPrisma implements IProductRepository {
    private prisma: PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(product: Product): Promise<Product> {
        const productCreated = await this.prisma.product.create({
            data: {
                name: product.name,
                price: product.price,
                stock: product.stock
            }
        })

        return new Product(
            productCreated.name,
            productCreated.price,
            productCreated.stock,
            productCreated.id,
            productCreated.createdAt,
            productCreated.updatedAt
        )
    }
}