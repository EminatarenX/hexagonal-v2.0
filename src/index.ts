import express from 'express'
import ProductRouter from './product/infraestructure/ProductRouter'
import UserRouter from './user/infraestructure/UserRoutes'
const app = express()
app.disable('x-powered-by')
const port = process.env.PORT || 4000
app.use(express.json())

app.use('/api/products', ProductRouter)
app.use('/api/users', UserRouter)

const server = app.listen(port, () => {
    console.log('running on port ' + port)
})

export {
    server
}