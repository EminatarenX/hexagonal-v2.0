import { IProductRepository } from "../dominio/IProductRepository";

export class FindAllProduct {
    constructor(private readonly repository: IProductRepository){}

    async run() {
        return await this.repository.findAll()
    }
}