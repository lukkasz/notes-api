const expect = require('expect');
const request = require('supertest');

const app = require('./../server').app;


describe('GET /', () => {
  it('should return status 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});

