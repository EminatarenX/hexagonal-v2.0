import { FindProduct } from "../../aplicacion/findProduct";
import { Request, Response } from "express";

export class FindOneController {
    constructor(private readonly findProduct: FindProduct){}

    async run (req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await this.findProduct.run(id)
            res.status(200).json({product})
        } catch (error) {
            res.status(400).json({message: 'there has an error', error})
        }
    }
}