const app = require('./app.js');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

// Config
dotenv.config({path: 'backend/config/config.env'});

// Connecting to database
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
