const expect = require('expect');
const request = require('supertest');
const ObjectID = require('mongodb').ObjectID;

const app = require('./../../server').app;
const Note = require('./../../models/note').Note;


var notes = [
  {
    _id: new ObjectID(),
    title: 'Some title',
    content: 'Some content'
  },
  {
    _id: new ObjectID(),
    title: 'Title 2',
    content: 'Some new content'
  }
];

beforeEach((done) => {
  Note.remove({}).then(()=> {
    Note.insertMany(notes);  
  }).then(() => done());
});

describe('NOTES ROUTE', () => {
  
  describe('GET /notes', () => {
    it('should return all notes', (done) => {
      request(app)
        .get('/notes')
        .expect(200)
        .expect((res)=>{
          expect(res.body.notes.length).toBe(2);
        })
        .end(done);
    });
  });
  
  
  describe('POST /notes', () => {
    it('should create new note', (done) => {
      var title = notes[0].title;
      var content = notes[0].content;
      
      request(app)
        .post('/notes')
        .send({
          title,
          content
        })
        .expect(200)
        .expect((res)=>{
          expect(res.body.title).toBe(title);
          expect(res.body.content).toBe(content)
        })
        .end((err, res)=>{
          if(err) {
            return done(err);
          }
          Note.find().then((notes)=>{
            expect(notes.length).toBe(3);
            expect(notes[0].title).toBe(title);
            expect(notes[0].content).toBe(content);
            done();
          }).catch((e)=>done(e));
        });
    });
    
    
    it('should not create Note with invalid body data', (done) => {
      request(app)
        .post('/notes')
        .send({})
        .expect(400)
        .end((err, res)=>{
          if (err) {
            return done(err);
          }
          
          Note.find().then((notes) => {
            expect(notes.length).toBe(2);
            done();
          }).catch((e) => done(e));
        })
    })
  });
  
});
