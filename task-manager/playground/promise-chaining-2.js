require('../src/db/mongoose')
const Task=require('../src/models/task')

// Task.findByIdAndDelete('62df7d9f32745cc5fbf07547').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('62df70a4227633b0a2f8ecb7').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})