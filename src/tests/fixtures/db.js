const User = require('../../models/user')
const Task = require('../../models/tasks')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const userOneId = new mongoose.Types.ObjectId
const userOne = {
    _id : userOneId,
    name: 'Jessica Akati',
    email: 'babe@gmail.com',
    password: 'Emma12345',
    tokens : [{
        token: jwt.sign({_id:userOneId}, process.env.JWT_SECRET)
    }]
    
}
const userTwoId = new mongoose.Types.ObjectId
const userTwo = {
    _id : userTwoId,
    name: 'Emmanuel Arkorful',
    email: 'me@gmail.com',
    password: 'Ema12345',
    tokens : [{
        token: jwt.sign({_id:userTwoId}, process.env.JWT_SECRET)
    }]
    
}
const taskOne = {
    _id: new mongoose.Types.ObjectId,
    description: 'Become the best backender',
    completed: false,
    owner: userOneId,
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId,
    description: 'Be the best person possible',
    completed: true,
    owner: userOneId,
}

const taskThree = {
    _id: new mongoose.Types.ObjectId,
    description: 'Moneeeyyyy',
    completed: false,
    owner: userTwoId,
}

const setUpDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwo,
    userTwoId,
    taskOne,
    taskTwo,
    taskThree,
    setUpDatabase
}