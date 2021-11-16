const express = require('express')
const app = express()
const port = 3000

const gastosRouter = require('./routes/gastos-routes')


app.use(express.json());

app.use('/gasto', gastosRouter)

app.listen(port, () => {
  console.log(`Iniciado na porta ${port}`)
})