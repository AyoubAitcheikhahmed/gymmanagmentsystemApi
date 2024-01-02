
const router = require ("express").Router();
const Membership = require ("../models/Membership")


router.get("/",(req,res) => {
    res.send(" Hello membership ROUTE")
})

router.post("/create", async (req,res) => {

    try{

        
        const membership = await new Membership ({
            title: req.body.title,
            price: req.body.price,
            validFrom: req.body.validFrom,
            validTo: req.body.validTo,
            
        });
    
       await membership.save();
       res.status(200).json("membership Added")

    }catch(error){
        console.log(error);
    }

})

//delete membership
router.post("/delete",async (req,res) => {

})
module.exports = router