const express = require('express');
const app = express();
// useNewUrlParser = true;
// db connnetion
// const mongoose = require('mongodb').MongoClient;
const mongoose = require('mongoose');
// mongoose.useNewUrlParser = true;
// mongoose.connect('mongodb://localhost:27017/todo-api')

mongoose.connect('mongodb+srv://sgrbhinge:sgrfusion@sgr1-axumk.mongodb.net/node-angular?retryWrites=true')
.then((dbResponse) => {
    console.log('Connected to Mongo!');
})
.catch (()=> {
    console.log("Connection failed!");
});

const myList = mongoose.model('list', {
    text: {type: String, minlength: 3},
    completed: {type: Boolean, default: false},
    completedAt: {type: Number} 
});

var newList = new myList({
    text: 'ge',
//    completed: true,
    completedAt: 123557887
});

newList.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('err is here', err);
});

const chk = {
    name: 'Sagar',
    age: 32,
    hobby: 'film-making'
};
const myHobby = {hobby} = chk;

// module.exports = app;