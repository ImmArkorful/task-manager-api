const request = require('supertest');
const app = require('../app');

test('Should sign up a new user', async () => {
    await request(app).post('/users').send({
        name: 'Emmanuel',
        email: 'e.arkorful3@gmail.com',
        password: 'Mypass777!'
    }).expect(201)
})