const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    res.render('about');
});
router.get('/abc',(req,res,next)=>{
    res.render('abc');
});
module.exports=router;