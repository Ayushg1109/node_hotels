const express = require('express')
const app = express();
const db = require('./db');// iska code db.js me likha h
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const Person = require('./models/person');
app.get('/', function (req, res) {
  res.send('Wow')
})
app.get('/Ayush', function (req, res) {
  res.send('Wow Ayush')
})
app.post('/person',async(req,res)=>{
  try{
  const data = req.body;
  const newPerson = new Person(data);
  const response = await newPerson.save();
  console.log('Data Saved Successfully');
      res.status(200).json(response)}
      catch(err){
        console.log(err);
        res.status(500).json('Internal Server Error');
      }
});
app.get('/person', async (req, res) => {
  console.log('GET /person hit');
  try {
    const data = await Person.find();
    console.log('Data Fetched Successfully');
    res.status(200).json(data);
  } catch (err) {
    console.log('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/person/:workType', async (req, res) =>{
  try{
    const workType = req.params.workType;
    if(workType=='chef' || workType=='waiter' || workType=='manager')
    {const data = await Person.find({work:workType});
      console.log('Data Fetched Successfully');
      res.status(200).json(data);
    }
    else
    {res.status(200).json(data);}
  }
  catch (err) {
    console.log('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

app.listen(3000,()=>{console.log('Listening on port 3000')});
//hello