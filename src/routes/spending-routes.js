const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')

const SpendingRepository = require('../repository/spending-repo')
const Spending = require('../model/spending')
const authConfig = require('../config/auth.json')

let sRepo = new SpendingRepository()


router.get('/', (req, res) => {
    return res.status(200).json(req.userId)
  });
  
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
  
  router.post('/', async(req, res) => {
    try{
        const spending = await Spending.create(req.body);

        const token = jwt.sign({id: spending.id}, authConfig.secret, {
          expiresIn: 86400
        })
    
        return res.send({spending, token})
    } catch (err){
        return res.status(400).send({ error: 'Registration failed'})
    }
  });
  
  
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
  
module.exports = app => app.use('/spending', router)