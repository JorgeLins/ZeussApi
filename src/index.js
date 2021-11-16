const express = require('express')
const app = express()
const port = 3000

const spendingRouter = require('./routes/spending-routes')


app.use(express.json());

app.use('/spending', spendingRouter)

app.listen(port, () => {
  console.log(`Iniciado na porta ${port}`)
})