import { CreateProduct } from "../../aplicacion/createProduct";
import { Request, Response } from "express";

export class CreateProductController {
    constructor(private readonly createProduct: CreateProduct){}

    async run(req: Request, res: Response) {
       try {
            const {name, description, price, stock } = req.body;
            const product = await this.createProduct.run(name, description, price, stock)
            res.status(201).json({product}) 
       } catch (error) {
            res.status(400).json({message: 'there has an error', error})
       }
    }
}