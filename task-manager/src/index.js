const express = require("express");
require("./db/mongoose");
// const User = require('./models/user')
// const Task = require('./models/task')

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// const multer = require('multer')
// const upload = multer ({
//   dest:'images',
//   limits:{
//     fileSize:1000000
//   },
//   fileFilter(req,file,cb){
//     if(!file.originalname.match(/\.(doc|docx)$/)){
//       return cb(new Error('Please upload a word doc '))

//     }
//     // cb(new Error('File must be a pdf'))
//     cb(undefined,true)
//     // cb(undefined,false)

//   }
// })

// const errorMiddleware=(req,res,next)=>{
//   throw new Error('From my middleware')
// }
// app.post('/upload',upload.single('upload'), (req,res)=>{
//   res.send()
// },(error,req,res,next)=>{
//   res.status(400).send({error:error.message})
// })

// //MIDDLEWARE

// app.use((req,res,next)=>{
//   if(req.method==='GET'){
//     res.send('Get requests are disabled')

//   }else{
//     next()
//   }

// })

// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down')

// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// app.post('/users',async (req,res)=>{
//     const user=new User(req.body)

//     try{
//         await user.save()
//         res.status(201).send(user)
//     }catch (e){
//         res.status(400).send(e)

//     }
//     // user.save().then(()=>{
//     //     res.status(201).send(user)

//     // }).catch((e)=>{
//     //     res.status(400).send(e)

//     // })

// })

// app.get('/users', async (req,res)=>{

//     try{
//         const users = await User.find({})
//         res.send(users)

//     }catch(e){
//         res.send(500).send()

//     }
//     // User.find({}).then((users)=>{
//     //     res.send(users)
//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })
// })

// app.get('/users/:id',async (req,res)=>{
//     const _id = req.params.id

//     try{
//         const user = await User.findById(_id)

//         if(!user){
//             return res.status(404).send()
//         }

//         res.send(user)
//     }catch(e){
//         res.status(500).send()
//     }

//     // User.findById(_id).then((user)=>{
//     //     if(!user){
//     //         return res.status(404).send()
//     //     }

//     //     res.send(user)

//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })
// })

// app.patch('/users/:id',async(req,res)=>{
//     const updates=Object.keys(req.body)
//     const allowedUpdates=['name','email','password','age']

//     const isValidOperation=updates.every((update)=>{

//         return allowedUpdates.includes(update)

//     })

//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid updates'})
//     }

//     try{
//         const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

//         if(!user){
//             return res.status(404).send()
//         }

//         res.send(user)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })

// app.delete('/users/:id',async (req,res)=>{
//     try{
//         const user=await User.findByIdAndDelete(req.params.id)

//         if(!user){
//             return res.status(404).send()
//         }

//         res.send(user)
//     }catch(e){
//         res.status(500).send()
//     }
// })

// app.post('/tasks',async (req,res)=>{
//     const task = new Task(req.body)
//     try{
//         await task.save()
//         res.status(201).send(task)

//     }catch(e){
//         res.status(400).send(e)

//     }
//     // task.save().then(()=>{
//     //     res.status(201).send(task)
//     // }).catch((e)=>{
//     //     res.status(400).send(e)
//     // })
// })

// app.get('/tasks',async (req,res)=>{
//     try{
//         const tasks = await Task.find({})
//         res.send(tasks)

//     }catch(e){
//         res.status(500).send()

//     }
//     // Task.find({}).then((tasks)=>{
//     //     res.send(tasks)

//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })
// })

// app.get('/tasks/:id',async (req,res)=>{
//     const _id=req.params.id

//     try{
//         const task=await Task.findById(_id)
//         if(!task){
//                     return res.status(404).send()
//                 }

//                 res.send(task)

//     }catch(e){
//         res.status(500).send()

//     }
//     // Task.findById(_id).then((task)=>{
//     //     if(!task){
//     //         return res.status(404).send()
//     //     }

//     //     res.send(task)

//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })

// })

// app.patch('/tasks/:id',async(req,res)=>{
//     const updates=Object.keys(req.body)
//     const allowedUpdates=['description','completed']

//     const isValidOperation=updates.every((updates)=>allowedUpdates.includes(updates))

//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid Update'})
//     }

//     try{
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true})

//         if(!task){
//             return res.status(404).send()
//         }
//         res.send(task)

//     }catch(e){
//         res.status(400).send(e)
//     }

// })

// app.delete('/tasks/:id',async (req,res)=>{
//     try{
//         const task=await Task.findByIdAndDelete(req.params.id)

//         if(!task){
//             res.status(404).send()
//         }

//         res.send(task)
//     }catch (e){
//         res.status(500).send()
//     }
// })

app.listen(port, () => {
  console.log("Server is up on port" + port);
});

// const bcrypt = require("bcryptjs");

// const myfunction = async () => {
//   const myPass = "jasudben ml";
//   const hashPass = await bcrypt.hash(myPass, 8);

//   console.log(myPass);
//   console.log(hashPass);

//   const isMatch = await bcrypt.compare(myPass, hashPass);

//   console.log(isMatch);
// };

// myfunction();

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   const user = await User.findById("62e920762ad63eda483c6e4b");
//   await user.populate("tasks");
//   // .execPopulate()
//   console.log(user.tasks);
// };

// main();
