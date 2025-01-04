import express from 'express';
import mongoose from 'mongoose';
import student from './model/student';
import bodyParser from 'body-parser';
import cors from "cors";
import nodemailer from  'nodemailer';
const app = express(); //express for creating route paths.it will work 
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://kusunu2222:MG2lD6zgvoozHMz1@Cluster0.oklkeel.mongodb.net/Cluster0?retryWrites=true&w=majority"
)
.then(()=> app.listen(5000))
.then(()=>
console.log("connected to database & listening to localhost 5000")
)
.catch((err)=> console.log(err));
app.use('/api',(req,res,next)=>{
    res.send("Hello FSD")

})
app.post('/addsreg',(req,res,next)=>{
    console.log(req.body.formdata)
    const {name,email} = req.body.formdata
    const sreg = new student({
        name,
        email,
    })
     //for saving data into the database
    try{
        sreg.save()  
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kusunuankam@gmail.com',
      pass: 'vaoh cxwc rguq ylzp'
    }
  });
  
  var mailOptions = {
    from: 'kusunuankam@gmail.com',
    to: 'kusunuankam@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Welcome to Voice Assiant App!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
  }
  });
    }catch(err){
        console.log(err);
    }
    return res.send({msg:"inserted",result:sreg}) //for displaying message 
})