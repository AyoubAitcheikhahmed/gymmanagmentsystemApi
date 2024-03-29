
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL);



const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const membershipRoute = require("./routes/membership")
const memberRoute = require("./routes/member")

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/membership",membershipRoute);
app.use("/api/member",memberRoute);


app.listen(8800, () => {
    console.log("BACKEND LISTENING 8800 >>>>>>>>>>>>>>>>")
})

