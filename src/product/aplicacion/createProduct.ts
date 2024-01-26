import { IProductRepository } from "../dominio/IProductRepository";
import { Product } from "../dominio/product";

export class CreateProduct {
    constructor(private readonly repository: IProductRepository){}

    async run(name: string, description: string, price: number, stock: number) {
        const product = new Product( name, description, price, stock)
        return await this.repository.save(product)
    }
}