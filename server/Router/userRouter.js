const router = require('express').Router()
const user = require('../Model/userSchema')

router.post('/signup',async(req,res)=>{
    try{
        const newUser = new user(req.body)
        console.log('users------',newUser);
        await newUser.save()
        res.status(200).json("success")
    }catch(err){
        res.status(500).json("failed")
    }
})

router.get('/getdatas',async(req,res)=>{
    try{
        const data = await user.findOne({Name:req.body.Name})
        console.log('datas----------',data);
        res.status(200).json(data)
    }catch(err){
        res.status(500).json("failed")
    }
    })

    router.delete('/deleteuser/:id',async(req,res)=>{
        try{
            const data = await user.findByIdAndDelete(req.params.id)  
            console.log('deleted students.........',data);
            res.status(200).json(data)
        }catch(err){
            res.status(500).json("failed")
        }

        
    })

    router.put('/updatedata',async(req,res)=>{
        console.log('-------data',req.query.name);
        try{
            const data = await user.findOneAndUpdate(req.query.name,{
            $set:{Place:req.body.Place}
            },{new:true})
            console.log('updated studednts.........',data);
            res.status(200).json(data)
        }catch(err){
            res.status(500).json("failed")
        }
    })



module.exports = router