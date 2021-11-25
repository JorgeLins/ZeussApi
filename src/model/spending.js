const mongoose = require('../database/spending-db')
const moment = require('moment')
const moments = require('moment-timezone')
// const dateBrazil =moments.tz(Date.now(),"America/Fortaleza")
const fomatted_date = moment().locale('pt-br').format('l');

console.log(fomatted_date)

const SpendgingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: String,
        default: fomatted_date
    }
})

const Spending = mongoose.model('Spending' , SpendgingSchema);

module.exports = Spending