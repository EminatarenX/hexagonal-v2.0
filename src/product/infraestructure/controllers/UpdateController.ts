import { UpdateProduct } from "../../aplicacion/updateProduct";
import { Request, Response } from "express";
export class UpdateController {
    constructor(private readonly updateProduct: UpdateProduct){}
    async run (req: Request, res: Response) {
        try {
            const {name, description, price, stock } = req.body;
            const {id} = req.params;
            const product = await this.updateProduct.run(id,name, description, price, stock)
            res.status(201).json({product})
        } catch (error) {
            res.status(400).json({message: 'there has an error', error})
        }
    }
}