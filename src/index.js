const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// app.use((req, res, next) =>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
    
// })

// app.use((req, res, next) =>{
//     res.status(503).send('Server are in maintenance. Retry later')
// })


// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function() {
//     console.log(this)

//     return {}
// }

// console.log(JSON.stringify(pet))



// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async() =>{
//     // const task = await Task.findById('5e951319c112453fe09f25df')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     // const user = await User.findById('5e951120c711761e2814d8c2')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }

// main()