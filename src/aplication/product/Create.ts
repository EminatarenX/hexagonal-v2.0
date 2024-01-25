import { IProductRepository } from "../../interfaces/ports/product/IProductRepository";
import { Product } from "../../domain/product/product";

export class CreateProduct {
    constructor(private readonly repository: IProductRepository){}
    async run(product: Product): Promise<Product>{
        return await this.repository.create(product);
    }
}