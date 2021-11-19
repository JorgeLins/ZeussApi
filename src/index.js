const express = require('express')
const app = express()
const port = 3000

const spendingRouter = require('./routes/spending-routes')
require('./database/spending-db')
const cors = require('cors');

app.use(cors({
  origin: '*'
}));
 
app.use(express.json());


// app.use('/spending', spendingRouter)

require('./routes/spending-routes')(app);

app.listen(port, () => {
  console.log(`Iniciado na porta ${port}`)
})