const request = require('supertest');
const app = require('../app')
describe('test GET/users', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
            .get('/users')
            .expect(200)
            .expect('Content-Type', /json/)
    })
})