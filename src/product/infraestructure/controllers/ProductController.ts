import { Router } from 'express'
import { CreateProduct } from '../../aplicacion/createProduct'
import { UpdateProduct } from '../../aplicacion/updateProduct'
import { ProductRepositoryPrisma } from '../ProductRepositoryPrisma'
import { FindProduct } from '../../aplicacion/findProduct'
import { FindAllProduct } from '../../aplicacion/findAllProduct'
import { DeleteProduct } from '../../aplicacion/deleteProduct'

const ProductRouter = Router()
const productRepository = new ProductRepositoryPrisma()

const createProduct = new CreateProduct(productRepository)
const updateProduct = new UpdateProduct(productRepository)
const findProduct = new FindProduct(productRepository)
const findAllProduct = new FindAllProduct(productRepository)
const deleteProduct = new DeleteProduct(productRepository)

ProductRouter.post('/', async( req, res) => {
    const {name, description, price, stock } = req.body;
    const product = await createProduct.run(name, description, price, stock)
    res.status(201).json({product})
})

ProductRouter.put('/:id', async( req, res) => {
    const {name, description, price, stock } = req.body;
    const {id} = req.params;
    const product = await updateProduct.run(id,name, description, price, stock)
    res.status(201).json({product})
})

ProductRouter.get('/:id', async(req, res) => {
    const { id } = req.params;
    const product = await findProduct.run(id)
    res.status(200).json({product})
})

ProductRouter.get('/', async(_, res) => {
    const products = await findAllProduct.run()
    res.status(200).json({products})
})

ProductRouter.delete('/:id', async(req, res) => {
    const { id } = req.params;
    await deleteProduct.run(id)
    res.status(200).json({message: 'Product deleted', ProductId: id})
})

export default ProductRouter