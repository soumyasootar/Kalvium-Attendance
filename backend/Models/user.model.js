const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "name": String,
    "roll_no" : Number,
    "user_id" : String,
    "password" : String,
    "admin" : Boolean,
    "squad" : Number,
    "day_status" : String,
    "check_in_out_status" : String,
    "day" : [
        {
            "date" : Date,
            "total_duration" : Number,
            "check_in_list" : [
                {
                    "start_time" : Date,
                    "end_time" : Date,
                    "room" : String
                    
                }
            ]
        }
    ]
})

const User = mongoose.model("user" , userSchema);

module.exports = User;