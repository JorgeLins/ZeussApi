const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:35753159@cluster0.itrfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    
});

mongoose.connection.on('connected', () => {
    console.log('connected to db')
})

mongoose.Promise = global.Promise;

module.exports = mongoose