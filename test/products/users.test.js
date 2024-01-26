const { server } = require("../../src/index")
const request = require('supertest')

describe('HTTP /users', () => {
    let userId = ''
    it('Should create a user' , async() => {
        const response = await request(server).post('/api/users').send({
            name: 'test',
            email: 'test@email.com',
            password: 'test'
        })
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('user')
        userId = response.body.user.id
        const user = response.body.user
        console.log('User created: ')
        console.table(user)
    })
    it('should update a user', async () => {
        const response = await request(server).put(`/api/users/${userId}`).send({
            name: 'test-update',
        })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('user')
        expect(response.body.user).toBeInstanceOf(Object)
        console.log('User: ')
        console.table(response.body.user)
    })
    it('should delete a user', async () => {
        const response = await request(server).delete(`/api/users/${userId}`)
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('message')
        console.log('User deleted ')
    })
})