import express from 'express'
import ProductRouter from './product/infraestructure/ProductRouter'
import UserRouter from './user/infraestructure/UserRoutes'
import { cors } from './cors/dependencies'

const app = express()
app.disable('x-powered-by')
// Environments
const port = process.env.PORT || 4000
export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'
// Cors & Middlewares
app.use(cors.setUp)
app.use(express.json())
// Routes
app.use('/api/products', ProductRouter)
app.use('/api/users', UserRouter)
// Server
export const server = app.listen(port, () => console.log('🚀 Server Deployed ' + port))
// Socket
import { socketHandler } from './socket/infraestructure/Dependencies';
socketHandler.connect()