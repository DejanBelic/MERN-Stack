import express from 'express';
import users from  './server/mocks/users';
import bodyParser from 'body-parser';
import logger from './server/middleware/logger';
import withAuthentication from './server/middleware/withAuthentication.js';

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication);
app.use(logger);

// Middleware order of execution before it gives end result.
// req => bodyParser.json => bodyParser.urlencoded => withAuthentication => logger => request handler.
app.get('/heartbeat', (req, res) => res.send({
  datetime: new Date().toJSON()
}));

app.get('/v1/users', (req, res) => {
  res.send(users);
});

app.get('/v1/users', (req, res) => {
  req.send(users[0])
});

app.post('/v1/users', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const role = req.body.role;
  console.log('post data => ', username, role, email);
  res.status(200).end();
});

app.put('/v1/users/:id', (req, res) => {
  const id = req.params.id;
  const username = req.body.username;
  const email = req.body.email;
  const role = req.body.role;
  console.log('post data => ', username, role, email);
  res.status(200).end();
});

app.delete('/v1/users/:id', (req, res) => {
    console.log('delete:id =>', req.params.id)
  res.status(200).end();
})

app.listen(port, () =>
  console.log(`Example app listening port ${port}`)
);

