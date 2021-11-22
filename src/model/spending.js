const mongoose = require('../database/spending-db')
const moment = require('moment-timezone')
const dateBrazil = moment.tz(Date.now(),"America/Fortaleza")
var fomatted_date = moment(dateBrazil).format('YYYY-MM-DD  HH:MM');

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
        type: Date,
        default: Date.now
    }
})

const Spending = mongoose.model('Spending' , SpendgingSchema);

module.exports = Spending