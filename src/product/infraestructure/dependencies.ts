import {CreateProductController} from './controllers/CreateController'
import { CreateProduct } from '../aplicacion/createProduct'
import { DeleteController } from './controllers/DeleteController'
import { DeleteProduct } from '../aplicacion/deleteProduct'
import { FindAllController } from './controllers/FindAllController'
import { FindAllProduct } from '../aplicacion/findAllProduct'
import { FindOneController } from './controllers/FindOneController'
import { FindProduct } from '../aplicacion/findProduct'
import { UpdateController } from './controllers/UpdateController'
import { UpdateProduct } from '../aplicacion/updateProduct'

import { ProductRepositoryPrisma } from './ProductRepositoryPrisma'

export const PrismaProductRepository = new ProductRepositoryPrisma()
// Create
export const createProductUseCase = new CreateProduct(PrismaProductRepository)
export const createProductController = new CreateProductController(createProductUseCase)

// Delete
export const deleteProductUseCase = new DeleteProduct(PrismaProductRepository)
export const deleteProductController = new DeleteController(deleteProductUseCase)

// FindOne
export const findProductUseCase =  new FindProduct(PrismaProductRepository)
export const findProductController = new FindOneController(findProductUseCase)

// FindAll
export const findAllProductUseCase = new FindAllProduct(PrismaProductRepository) 
export const findAllProductController = new FindAllController(findAllProductUseCase)

// Update
export const updateProductUseCase = new UpdateProduct(PrismaProductRepository)
export const updateProductController = new UpdateController(updateProductUseCase)
