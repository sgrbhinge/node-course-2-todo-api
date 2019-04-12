const express = require('express');
const app = express();
// useNewUrlParser = true;
// db connnetion
const mongoose = require('mongodb').MongoClient;
// mongoose.connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=todo-api')
mongoose.useNewUrlParser = true;

mongoose.connect('mongodb+srv://sgrbhinge:sgrfusion@sgr1-axumk.mongodb.net/node-angular?retryWrites=true')
.then((dbResponse) => {
    console.log('Connected to Mongo!');
    const chk = {
        name: 'Sagar',
        age: 32,
        hobby: 'film-making'
    };
    const {hobby} = chk;
    console.log(hobby);
    // db.getCollection("users").insertOne({
    //     name: 'Sagar',
    //     age: 31
    //     })
    // dbResponse.getCollection("posts").find({});
        // text: 'Sagar',
        // age: 31
})
.catch (()=> {
    console.log("Connection failed!");
});

module.exports = app;