const express = require('express');
const { addNewUser , checkInOut , startDay, getUser , getUsers } = require("./../Controllers/user.controller")

const userRoute = express.Router();

userRoute.get("/", (req , res )=> {
    try{

        res.send("aman is user 1")

    }catch(err){
        console.log(err);
        return res.status(500).send({
            error:err
        })
    }
})


userRoute.post("/adduser" , async (req , res) =>{
    try{
        
        let userDetails = req.body;
        let udata = await addNewUser(userDetails);
        
        res.send(udata);

    }catch(err){
        console.log(err.message);
        res.status(500).send({
            error : err.message
        })
    }
})

userRoute.get("/getusers" , async (req , res) =>{
    try{
        
        
        let udata = await getUsers();
        
        res.send(udata);

    }catch(err){
        console.log(err.message);
        res.status(500).send({
            error : err.message
        })
    }
})

userRoute.post("/startday" , async (req , res) =>{
    try {

        let squad_no = req.query.squad;
        let dayDetails = req.body;
        let udata = await startDay( squad_no , dayDetails);
        
        res.send(udata);

    }catch(err){
        console.log(err.message);
        res.status(500).send({
            error : err.message
        })
    }
})

userRoute.post("/inout" , async (req , res) =>{
    try{
        
        let userId = req.query.id;
        let room_no = req.body.room;
        let udata = await checkInOut(userId , room_no);
        
        res.send(udata);

    }catch(err){
        console.log(err.message);
        res.status(500).send({
            error : err.message
        })
    }
})

module.exports = userRoute;
