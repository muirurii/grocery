const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connection = async() => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('conn')
    } catch (error) {
        console.log('not conn')

        throw new Error(error);
        process.exit(1);
    }
}

module.exports = connection;