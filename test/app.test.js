const supertest = require('supertest');
const app = require('../src/app');

test('greet endpoint', async () => {
    const response = await supertest(app).get('/greet');
    expect(response.statusCode).toEqual(200);
});