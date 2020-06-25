const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify:false
})


/* const me = new User({
        name : '   Jessica   ',
        email: '  JESSICA@GMAIL.COM   ',
        password: 'password'
})

me.save().then((me)=>{
    console.log(me);
    
}).catch((error)=>{
    console.log('Error!: ',error);
    
}) */




/* taskOne.save().then((task)=>{
    console.log(task);
}).catch((error)=>{
    console.log(error);
}) */