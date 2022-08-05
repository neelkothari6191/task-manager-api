
const mongoose = require ('mongoose')

mongoose.connect(process.env.MONGODB_URL)




// //Creating instance of the model

// const me=new User({
//     name:'Neel',
//     email:'MYEMAIL@GM.COM',
//     password:'neelneel'
// })


// //Saving instance to database
// me.save().then(()=>{
//     console.log(me)

// }).catch((error)=>{
//     console.log('Error',error)
// })

// const Task=mongoose.model('Task',{
//     description:{
//         type:String,
//         trim:true,
//         required:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })

// const task=new Task({
//     description:'   Eat lunch   ',
//     // completed:false,
    
// })

// task.save().then(()=>{
//     console.log(task)

// }).catch((error)=>{
//     console.log('Error!',error)
// })

