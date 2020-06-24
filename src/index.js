const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
        
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word Document'));
//         }

//         cb(undefined,true);
//     }
// })


// const errorMiddleware = (req,res, next) => {
//     throw new Error('from my middleware')
// }
// app.post('/upload', upload.single('upload') , (req,res) => {
//     res.send();
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

// const Task = require('./models/tasks');
// const User = require('./models/user');

// app.use((req, res, next) => {
    
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled');
//     }
//     next();
// })



// app.use((req,res,next) => {
//     res.status(503).send('System Under Maintenance')
// })

// const main = async() => {
//     // const task = await Task.findById('5eee0ec82c38c13638dfcacc');
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner);

//     const user = await User.findById('5eee0ddae5fe0a31d45ac8dc');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
    
    
// }

// main()
// const pet = {
//     name: 'Dixy',
//     age: '2'
// }
// pet.toJSON = function () {
//     console.log(this);
//     return this.age;
// }
// console.log(JSON.stringify(pet));


// const jwt = require('jsonwebtoken');
// const { json } = require('express');

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'asfsca' }, 'thisismynewcourse',{ expiresIn : '7 days' });
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data);
    
// }

// myFunction();