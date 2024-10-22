const mongoose = require('mongoose');
//const mongoURL = 'mongodb://localhost:27017/hotels';
const mongoURL = 'mongodb+srv://ayush11spt:avantikaayush@cluster0.rjx4k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
const db = mongoose.connection;
db.on('connected',()=>{console.log('Connected');});
db.on('error',(err)=>{console.log('Error',err);});
db.on('disconnected',()=>{console.log('disconnected');});

module.exports = db;