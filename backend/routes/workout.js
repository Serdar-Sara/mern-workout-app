

const express= require("express");

const router= express.Router();


//   api/workouts + /
//   get all workouts
router.get('/', (req,res)=>{
res.json({mssag: 'get all workouts'})
})


//get one workout
router.get('/:id', (req,res)=>{
    res.json({mssg:'get one workout'})
})


//post one workout
router.post('/',(req,res)=>{
 res.json({mssg:'post one workout'})
} )


//delete one
router.delete('/:id',(req,res)=>{
 res.json({mssg: 'delete '})
})

//update
router.patch('/:id',()=>{
    res.json({mssg:'update'})
})



module.exports=router;