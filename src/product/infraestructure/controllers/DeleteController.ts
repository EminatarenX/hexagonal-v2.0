import { DeleteProduct } from "../../aplicacion/deleteProduct";
import { Request, Response } from "express";
export class DeleteController {
    constructor(private readonly deleteProduct: DeleteProduct){}
    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.deleteProduct.run(id)
            res.status(200).json({message: 'Product deleted', ProductId: id})
        } catch (error) {
            res.status(400).json({message: 'there has an error', error})
        }
    }
}