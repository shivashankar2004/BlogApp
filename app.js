const express=require('express')
const app =express()
const mongoose=require('mongoose');

const blogRoutes=require('./routes/blogroutes')
//connect to mongodb
const dburi='mongodb+srv://shivashankar20:hrezmr19@nodetuts.rvojjoy.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=nodetuts'
//db
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())
mongoose.connect(dburi)
.then(()=>{app.listen(3000)
})
.catch((err)=>console.log(err))

//morgon module

app.set('view engine','ejs')
//middleware & static fils

// const { result } = require('lodash');



// app.use((req,res,next)=>{
//     console.log('host',req.hostname)
//     //it will continue after this next...
//     next();
// })

//mongoose routes
// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//         title:'new blog',
//         snippet:'about new blog',
//         body:'moree'
//     });
//     blog.save()//data sent by mongo
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{

//     })
// })


// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

app.get('/',(req,res) => {
    res.redirect('/blogs')
})
//we won't get response after this because once response is sent it wont consider app.use 
app.get('/about',(req,res) => {
    //res.send('<p>home page</p>')
   
    res.render('about',{title:'about'})//relative path
})

app.use(blogRoutes)
//404 if nothing above response didnt get matched....
//always should be in bottom...
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})