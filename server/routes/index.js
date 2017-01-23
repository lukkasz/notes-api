const routes = require('express').Router();
const notes = require('./notes');

// routes.get('/', (req, res) => {
//     res.status(200).send({ message: 'Connected!' });
// });

routes.use('/notes', notes);

module.exports = routes;