const express = require("express")
const authRoute = express.Router();

const {register , login } = require('./../Controllers/user.controller');



// authRoute.post('/register' , async (req , res ) => {
//     try {
//         let usr = req.body;

//         let dta = await register(usr);

//         res.send(dta);

//     }catch (err) {
//         console.error(err.message);
//         return res.status(500).send({
//             error : err.message
//         })
//     }
// })

authRoute.post("/login" , async (req , res ) => {
    try {
        
        let usr = req.body;

        let dta = await login(usr);

        res.send(dta);


    }catch (err) {
        console.error(err.message);
        return res.status(500).send({
            error : err.message
        })
    }

} )


module.exports = authRoute



