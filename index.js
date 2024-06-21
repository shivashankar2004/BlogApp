const fspromises =require('fs').promises
const path=require('path')

const fileops=async()=>{
    try{
        const data=await fspromises.readFile(path.join(__dirname,'./starter.txt'),'utf8')
        console.log(data)
    }catch(err){
        console.error(err)
    }
}                                                                                            
fileops()

// fs.readFile('./starter.txt','utf-8',(err,data)=>
// {
//     if (err) throw err;
//     console.log(data);
// })
// process.on('uncaughtException', err=>{
//     console.log(`error is ${err}`)
//     process.exit(1)
// })

// fs.writeFile('./reply.txt','im the shiva shankar',(err)=>{
//     if (err) throw err
//     console.log('process completed')
            //call back is used
//     fs.appendFile('./reply.txt','\n ok sir',(err)=>{
//         if (err) throw err
//         console.log('append done completed')
// })
// })