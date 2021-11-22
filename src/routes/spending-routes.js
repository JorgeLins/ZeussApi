const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')

const Spending = require('../model/spending')
const authConfig = require('../config/auth.json')


router.get('/', async (req, res) => {
    try{
      const spendings = await Spending.find();

      return res.status(200).send({ spendings })
    }catch{
      return res.status(404).send({ error: 'Spending not found'})
    }
  });
  
  router.get('/:id', async (req, res) => {
    try{
      const spendings = await Spending.findById(req.params.id);

      const body = req.body

      return res.status(200).send({ spendings })
    }catch{
      return res.status(404).send({ error: 'Spending not found'})
    }
  });

  router.post('/', async(req, res) => {
    try{
        const spending = await Spending.create(req.body);
    
        return res.send({spending})
    } catch (err){
        return res.status(400).send({ error: 'Registration failed'})
    }
  });
  
  
  router.put('/:id', async (req, res) => {
    try{

      const {price , quantity, name} = req.body;

      const spendings = await Spending.findByIdAndUpdate(req.params.id , {
        name,
        price,
        quantity
      }, { new: true});

      await spendings.save()

      return res.status(200).send({ status: 'Spending updated with sucess' })
    }catch{
      return res.status(404).send({ error: 'Spending not found'})
    }

  })
  
  router.delete('/:id', async (req, res) => {
    try{
      

      const spendings = await Spending.findByIdAndDelete(req.params.id);

      return res.status(200).send({ status: 'Spending deleted with sucess' })
    }catch{
      return res.status(404).send({ error: 'Spending not found'})
    }
  });

  router.delete('/', async (req, res) => {
    try{
      const spendings = await Spending.deleteMany();

      return res.status(200).send({ status: 'Spending deleted with sucess' })
    }catch{
      return res.status(404).send({ error: 'Spending not found'})
    }
  });
  
  
  
module.exports = app => app.use('/spending', router)