const mongoose = require('../database/spending-db')
const moment = require('moment-timezone')
const dateBrazil = moment.tz(Date.now(),"America/Fortaleza").format()

console.log(dateBrazil)

const SpendgingSchema = new mongoose.Schema({
    price:{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    createdAt:{
        type: Date,
        default: dateBrazil
    }
})

const Spending = mongoose.model('Spending' , SpendgingSchema);

module.exports = Spending