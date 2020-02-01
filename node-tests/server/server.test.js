const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {

    it('should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toHaveProperty('error', 'Page Not Found')
            })
            .end(done);
    });
    
    it('should return users response', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toContainEqual({
                        name: 'Dex',
                        age: 20
                })
            })
            .end(done);
    });
});