const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const UserRepository = require('./repository/user-repo')
const User = require('./model/user')

let uRepo = new UserRepository()

app.get('/user', (req, res) => {
  res.send(JSON.stringify(uRepo.findAll()))
})

app.get('/user/:id', (req, res) => {

  let uid = req.params.id;

  user = uRepo.find(uid);

  res.send(JSON.stringify(user)) 
})

app.post('/user', (req, res) => {
  let u = req.body
  console.log(u)

  uRepo.insert(new User(u.id, u.nome, u.email))

  res.send("POST")
})

app.put('/user/:id', (req, res) => {

  let uid = req.params.id;
  let u = req.body;

  user = uRepo.find(uid)

  user.nome = u.nome;
  user.email = u.email;

  uRepo.update(user)

  res.send(JSON.stringify(user))  
})

app.delete('/user/:id', (req, res) => {

  let uid = req.params.id;
  user = uRepo.find(uid)

  uRepo.delete(user)

  res.send(`DELETE with ID(${req.params.id})`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})