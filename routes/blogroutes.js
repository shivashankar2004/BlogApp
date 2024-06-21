const express=require('express');
const router=express.Router();
const Blog=require('../models/blog')
router.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create'});
})

router.get('/blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.render('index',{title:'All blogs',blogs:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.post('/blogs',(req,res)=>{
    const blog=new Blog(req.body)
     blog.save()
     .then((result)=>{
        res.redirect('/blogs')
     })
     .catch((err)=>{
        console.log(err)
     })
})

router.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create'});
})


router.get('/blogs/:nut',(res,req)=>{
    const nu=req.params.nut
  console.log(nu)
    Blog.findById(nu)
    .then((result)=>{
       res.render('/views/details',{blog:result,title:'blog details'})
       console.log(id)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });

  module.exports=router;