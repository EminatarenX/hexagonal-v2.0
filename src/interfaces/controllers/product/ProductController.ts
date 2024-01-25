import { Router, Request, Response } from 'express'
import { CreateProduct } from '../../../aplication/product/Create'
import { ProductRepositoryPrisma } from '../../../infraestructure/db/product/ProductRepositoryPrisma'

const ProductRouter = Router();
const repository = new ProductRepositoryPrisma();
const createProduct = new CreateProduct(repository);

ProductRouter.post('/create', async(req: Request, res: Response) => {
    const { name, price, stock } = req.body;
    try {
        const product = await createProduct.run({ name, price, stock });
        res.status(201).json({ product });
    } catch (error: unknown) {
        const message = (error as Error).message;
        res.status(400).json({ message });
    }
})

export default ProductRouter;