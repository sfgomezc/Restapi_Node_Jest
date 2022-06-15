const request = require('supertest')
const app = require('./app')


describe('testing endpoints', () => {

    describe('testing "test" GET method', () => {
        test('Should respond 200 with a 200 status code', async () => {
            const response = await request(app).get('/test').send()
            expect(response.status).toBe(200)
        })
    })

})