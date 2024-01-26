import { IProductRepository } from "../dominio/IProductRepository";

export class UpdateProduct {
    constructor(private readonly repository: IProductRepository){}
    async run(id: string, name: string, description: string, price: number, stock: number) {
        const producto = await this.repository.findById(id)
        producto.update(name, description, price, stock)
        return await this.repository.update(producto)
    }

}