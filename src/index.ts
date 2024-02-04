import express from 'express'
import ProductRouter from './product/infraestructure/ProductRouter'
import UserRouter from './user/infraestructure/UserRoutes'
import { Server as IOServer } from 'socket.io'
import { SocketRepository } from "./socket/infraestructure/SocketRepository";
import { SocketHandler } from "./socket/aplication/SocketHandler";

const app = express()
app.disable('x-powered-by')
const port = process.env.PORT || 4000
app.use((req, res, next ) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})
app.use(express.json())


app.use('/api/products', ProductRouter)
app.use('/api/users', UserRouter)

export const server = app.listen(port, () => {
    console.log('running on port ' + port)
})

export const io = new IOServer( server , {
    cors: {
        origin: 'http://localhost:3000',
    },
    pingTimeout: 60000,
})

const socketRepository = new SocketRepository(io)
export const socketHandler = new SocketHandler(socketRepository)

socketHandler.connect()


