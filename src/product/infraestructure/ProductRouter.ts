import { Router } from 'express'
import { 
    createProductController,
    updateProductController,
    deleteProductController,
    findProductController,
    findAllProductController
 } from './dependencies'


const ProductRouter = Router()

ProductRouter.post(
    '/', 
    createProductController.run.bind(createProductController))

ProductRouter.put(
    '/:id', 
    updateProductController.run.bind(updateProductController)
)

ProductRouter.get(
    '/:id', 
    findProductController.run.bind(findProductController)
)

ProductRouter.get(
    '/',
    findAllProductController.run.bind(findAllProductController)
)

ProductRouter.delete(
    '/:id', 
    deleteProductController.run.bind(deleteProductController)
)

export default ProductRouter