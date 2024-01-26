import { IProductRepository } from "../dominio/IProductRepository";

export class DeleteProduct {
    constructor(private readonly repository: IProductRepository){}
    async run(id: string) {
        return await this.repository.delete(id)
    }
}