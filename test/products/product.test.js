const request = require('supertest')
const { server } = require("../../src/index")

describe('HTTP /products', () => {
    let userId = ''
    it('Should create a product' , async() => {
        const response = await request(server).post('/api/products').send({
            name: 'test',
            description: 'test',
            price: 10,
            stock: 10
        })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('product')
        userId = response.body.product.id
        const product = response.body.product
        console.log('Product created: ')
        console.table(product)
          
    })
    it('should return 200 OK and users Array', async () => {
        const response = await request(server).get('/api/products')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('products')
        expect(response.body.products).toBeInstanceOf(Array)
        console.log('Products: ')
        console.table(response.body.products)
    })

    it('should return 200 OK and user object', async () => {
        const response = await request(server).get(`/api/products/${userId}`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('product')
        expect(response.body.product).toBeInstanceOf(Object)
        console.log('Product: ')
        console.table(response.body.product)
    })

    it('should update a product', async () => {
        const response = await request(server).put(`/api/products/${userId}`).send({
            name: 'test-update',
            description: 'test-update',
            price: 200,
            stock: 200
        })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('product')
        const product = response.body.product
        console.log('Product updated: ')
        console.table(product)
    })
    it('should delete a product', async () => {
        const response = await request(server).delete(`/api/products/${userId}`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('message')
        console.log('Product deleted ')
    })


})