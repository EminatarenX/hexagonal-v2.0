import { FindAllProduct } from "../../aplicacion/findAllProduct";
import { Request, Response } from "express";

export class FindAllController {
    constructor(private readonly findAllProduct: FindAllProduct){}

    async run (req: Request, res: Response) {
        try {
            const products = await this.findAllProduct.run()
            res.status(200).json({products})
        } catch (error) {
            res.status(400).json({message: 'there has an error', error})
        }
    }
}