const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DB_URI, () => {
        console.log(`Mongodb server connected on ${process.env.DB_URI}`);
    });
};

module.exports = connectDB;
