const mongoose = require('mongoose');
const User = require('./../Models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();


function generateToken(user) {

    let jwtsecret = process.env.JWT_SECRET;
    let token = jwt.sign(user, jwtsecret)

    return token;

}

function verifyToken(token) {

    let payload = jwt.verify(token, process.env.JWT_SECRET);

    return payload;

}

async function getUser(id) {

    let usr = await User.findOne({ _id: id });

    usr = usr.toJSON();

    delete usr.password;

    return usr;
}

async function register(usr) {
    let dta = await User.create(usr);

    return dta;
}

async function login(usr) {

    let dta = await User.findOne({ user_id: usr.user_id });

    if (dta.password == usr.password && dta.admin) {

        let user = dta.toJSON();

        delete user.password;

        let token = generateToken(user);

        return { token, user };

    } else {
        return { message: "wrong credentials" };
    }
}

///  Main file

async function addNewUser(userDetails) {
    let usr = User.create({
        name: userDetails.name,
        roll_no: userDetails.roll_no,
        user_id: userDetails.user_id,
        password: userDetails.password,
        squad: userDetails.squad,
        check_in_out_status: "Checked Out",
        day_status: "end",
        day: []

    })

    return usr;
}

async function getUsers() {
    let usr = await User.find();
    return usr;
}

async function startDay(squad_no, dayDetails) {

    if (dayDetails.password == process.env.DAYPASSWORD) {

        if (dayDetails.day_status == "end") {

            let old_date_user = await User.findOne({ squad : squad_no });

            let last_date = old_date_user.day.length > 0 ? old_date_user.day[old_date_user.day.length -1].date.toString().substring(0 , 15) : "dummy date" ;

            let new_date = new Date();

            new_date = new_date.toString().substring(0 , 15 )

            if( last_date == new_date ){

                let tsk = await User.updateMany({ squad: { $eq: squad_no } }, {
                    $set: {  day_status: "start" }
                })

            }else{

                let tsk = await User.updateMany({ squad: { $eq: squad_no } }, {
                    $set: { check_in_out_status: "Checked Out", day_status: "start" },
                    $push: { day: { date: new Date(), total_duration: 0, check_in_list: [] } }
                })

            }

            // return old_date_user;

            return { message: "Day Started" };
        } else {

            let tsk = await User.updateMany({ squad: { $eq: squad_no } }, {
                $set: {  day_status: "end" }
            })

            return { message: "Day Ended" };

        }

    } else {
        return { message: "Wrong Password" };
    }

}

async function checkInOut(id, room_no) {

    let user_obj = await User.findById(id);

    let lastday_obj = user_obj.day[user_obj.day.length - 1];

    if (user_obj.day_status === "start") {

        if (user_obj.check_in_out_status == "Checked Out") {

            let usr = await User.updateOne({ _id: id, day: { $elemMatch: { _id: lastday_obj._id } } }, {
                $set: { check_in_out_status: "Checked In" },
                $push: { "day.$.check_in_list": { start_time: new Date(), end_time: null, room: room_no } }

            })


            return usr;

        } else {

            let old_check_in_id = lastday_obj.check_in_list[lastday_obj.check_in_list.length - 1]._id;

            let total_duration = 0;                                       

            lastday_obj.check_in_list.map((elem) => {                
                let et ;
                if( elem.end_time == null ){
                    et = new Date();
                }else{
                    et = new Date(elem.end_time);
                }
                    let st = new Date(elem.start_time);
                    total_duration = total_duration + (et - st);
            })


            let usr = await User.updateOne({ _id: id },
                { $set: { check_in_out_status: "Checked Out", "day.$[o].total_duration" : total_duration , "day.$[o].check_in_list.$[i].end_time": new Date() } },
                { arrayFilters: [{ 'o._id': lastday_obj._id }, { 'i._id': old_check_in_id }] }
            )

            return usr;

        }

    }else {
        return {message : "Please start your day" };
    }


}



module.exports = {
    addNewUser,
    checkInOut,
    startDay,
    getUsers,

    register,
    login,
    verifyToken,
    getUser
};


