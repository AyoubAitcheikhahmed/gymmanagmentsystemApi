
const router = require ("express").Router();
const Member = require ("../models/Member")



//  create member
router.post("/create", async (req,res) => {

    try{
        const member = await new Member ({
            lastName : req.body.lastName,
            firstName : req.body.lastName,
            email : req.body.email,
            phone: req.body.phone,
            memberships: req.body.memberships,
            birthday: req.body.birthday 
        });
    
       await member.save();
       res.status(200).json("member Added")

    }catch(error){
        console.log(error);
    }

})

//  update member
router.put("/:id", async (req,res) => {

        try{
            const user = await Member.findByIdAndUpdate(req.params.id,{$set:req.body,});
            res.status(200).json("Member is updated")
        }catch(error){
            return res.status(500).json("Error while trying to update member");
        }
    

})



//  delete member
router.post("/delete",async (req,res) => {

})
module.exports = router