const mongoose = require('../database/spending-db')
const moment = require('moment-timezone')
const dateBrazil = moment.tz(Date.now(),"America/Fortaleza")

console.log(dateBrazil)

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
    id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Spending = mongoose.model('Spending' , SpendgingSchema);

module.exports = Spending