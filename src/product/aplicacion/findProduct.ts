import { IProductRepository } from "../dominio/IProductRepository";

export class FindProduct {
    constructor(private readonly repository: IProductRepository){}
    async run(id: string) {
        return await this.repository.findById(id)
    }
}