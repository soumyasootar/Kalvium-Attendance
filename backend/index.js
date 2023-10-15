const express = require('express');
const connectDatabase = require("./db/connectDatabase");
const userRoute = require('./Routes/user.route');
const AuthMiddleware = require('./Middleware/userAuth.Middleware');
const authRoute = require("./Routes/auth.route");
const cors = require('cors')
require('dotenv').config();

const app = express();

const port =process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

app.use("/auth" , authRoute );

app.use( AuthMiddleware );

app.use("/user" , userRoute );

app.get( '/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});



connectDatabase().then(()=>{
  app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
})
