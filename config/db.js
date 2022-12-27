const mongoose = require('mongoose');

module.exports.connectDb = async () => {
    mongoose.connect(process.env.DATABASE_URL);
    const database = mongoose.connection
    database.on('error', (error) => {
        console.log(error)
    })
    database.once('connected', () => {
        console.log("Connected")
    })
}