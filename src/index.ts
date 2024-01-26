import express from 'express'
import ProductRouter from './product/infraestructure/controllers/ProductController'
import UserRouter from './user/infraestructure/controllers/userController.'
const app = express()
app.disable('x-powered-by')
const port = process.env.PORT || 4000
app.use(express.json())

app.use('/api/products', ProductRouter)
app.use('/api/users', UserRouter)

app.listen(port, () => {
    console.log('running on port ' + port)
})
