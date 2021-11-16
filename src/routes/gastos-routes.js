const express = require('express')
const router = express.Router();

const GastosRepository = require('../repository/gastos-repo')
const Gastos = require('../model/Gastos')

let uRepo = new GastosRepository()

router.get('/', (req, res) => {
    return res.status(200).json(uRepo.findAll())
  })
  
  router.get('/:id', (req, res) => {
  
    let uid = req.params.id
  
    user = uRepo.find(uid)

    if(user == undefined){
        resp = {
            status:'ERROR',
            description: `Gasto ${uid} não encontrado.`
        }
        return res.status(404).json(resp)
    }
  
    return res.status(200).json(user)
  })
  
  router.post('/', (req, res) => {
    let u = req.body
    console.log(u)
  
    if(u.id == undefined || u.preco == undefined || u.quantidade == undefined){
        resp = {
            status:'ERROR',
            description: `Espedings must be provided`
        }
        return res.status(404).json(resp)
    } 
    
    
    uRepo.insert(new Gastos(u.id, u.preco, u.quantidade))

    
  
    res.send("POST")
  })
  
  router.put('/:id', (req, res) => {
  
    let uid = req.params.id
    let u = req.body
  
    user = uRepo.find(uid)
  
    console.log(uid)

    if(user == undefined){
        resp = {
            status:'ERROR',
            description: `Gasto ${uid} não encontrado.`
        }
        return res.status(404).json(resp)
    }
  
    user.preco = u.preco;
    user.quantidade = u.quantidade;
    

    uRepo.update(user)

  
    return res.status(200).json(user)
  })
  
  router.delete('/:id', (req, res) => {
  
    let uid = req.params.id;
    user = uRepo.find(uid)

    if(user == undefined){
        resp = {
            status:'ERROR',
            description: `Gasto ${uid} não encontrado.`
        }
        return res.status(404).json(resp)
    }
  
    uRepo.delete(user)

    
  
    res.send(`DELETE with ID(${req.params.id})`)
  })
  

  module.exports = router;