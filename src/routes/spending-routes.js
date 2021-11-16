const express = require('express')
const router = express.Router();

const SpendingRepository = require('../repository/spending-repo')
const Spending = require('../model/spending')

let sRepo = new SpendingRepository()

router.get('/', (req, res) => {
    return res.status(200).json(sRepo.findAll())
  })
  
  router.get('/:id', (req, res) => {
  
    let uid = req.params.id
  
    spending = sRepo.find(uid)

    if(spending == undefined){
        resp = {
            status:'ERROR',
            description: `Gasto ${uid} não encontrado.`
        }
        return res.status(404).json(resp)
    }
  
    return res.status(200).json(spending)
  })
  
  router.post('/', (req, res) => {
    let u = req.body
    console.log(u)
  
    if(u.id == undefined || u.preco == undefined || u.quantidade == undefined){
        resp = {
            status:'ERROR',
            description: `Espedings must be provided`
        }
        return res.status(400).json(resp)
    } 
    
    
    sRepo.insert(new Spending(u.id, u.preco, u.quantidade))

    resp = {
      status:'OK',
      description: `Post spending ${u.id} with sucess`
  }
  
  return res.status(200).json(resp)
  })
  
  router.put('/:id', (req, res) => {
  
    let uid = req.params.id
    let u = req.body
  
    spending = sRepo.find(uid)
  
    console.log(uid)

    if(spending == undefined){
        resp = {
            status:'ERROR',
            description: `Gasto ${uid} não encontrado.`
        }
        return res.status(404).json(resp)
    }
  
    spending.preco = u.preco;
    spending.quantidade = u.quantidade;
    

    sRepo.update(spending)

  
    return res.status(200).json(spending)
  })
  
  router.delete('/:id', (req, res) => {
  
    let uid = req.params.id;
    spending = sRepo.find(uid)

    if(spending == undefined){
        resp = {
            status:'ERROR',
            description: `Gasto ${uid} não encontrado.`
        }
        return res.status(404).json(resp)
    }
  
    sRepo.delete(spending)

    resp = {
      status:'OK',
      description: `Spending ${u.id} deleted with sucess`
  }
  
  return res.status(200).json(resp)
  })
  

  module.exports = router;