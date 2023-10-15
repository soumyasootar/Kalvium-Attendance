const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = async () => {
    try{
        mongoose.connect(process.env.DB_CONNECTION_URL)
        console.log("conected to database");
        
    }catch(err){
        console.log(err.message)
        return {error : err.message };
    }
}

module.exports = connectDatabase;