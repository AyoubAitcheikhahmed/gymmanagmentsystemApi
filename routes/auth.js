
const router = require ("express").Router();
const User = require ("../models/User")
const bcrypt = require("bcrypt")

router.get("/",(req,res) => {
    res.send(" Hello AUTH ROUTE")
})

router.post("/register", async (req,res) => {

    try{

        const salt = await bcrypt.genSalt(10);
        const hashedPw = await bcrypt.hash(req.body.password, salt);
        
        const user = await new User ({
            username: req.body.username,
            password: hashedPw,
        });
    
       await user.save();
       res.status(200).json(user)

    }catch(error){
        console.log(error);
    }
    
})


router.post("/login",async (req,res) => {

    try {
        console.log("inside Login ");
        const user = await User.findOne({username: req.body.username})
        if(!user || user == null) {
            res.status(404).json("problem with login process, credentials not matching UN")
        }

        const validPw = await bcrypt.compare(req.body.password, user.password)
        if(!validPw) {
            res.status(400).json("problem with login process, credentials not matching PW")
        }


        res.status(200).json(user.username)
    } catch (error) {
        console.log(error);
    }
})
module.exports = router