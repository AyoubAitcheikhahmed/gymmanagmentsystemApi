
const router = require ("express").Router();


router.get("/",(req,res) => {
    res.send(" Hello USER ROUTE")
})
module.exports = router