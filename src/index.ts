import express, {Request, Response, NextFunction} from 'express'
import ProductRouter from './product/infraestructure/ProductRouter'
import UserRouter from './user/infraestructure/UserRoutes'
import { print } from './config/signale/Signale'
const app = express()
app.disable('x-powered-by')
// Environments
const port = process.env.PORT || 4000
export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'
// Cors & Middlewares
app.use(express.json())
app.use(function(_: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', FRONTEND_URL)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})
app.use(express.json())
// Routes
app.use('/api/products', ProductRouter)
app.use('/api/users', UserRouter)
// Server
export const server = app.listen(port, () => print.start(port))
// Socket
import { socketHandler } from './config/socket/infraestructure/Dependencies';
socketHandler.connect()