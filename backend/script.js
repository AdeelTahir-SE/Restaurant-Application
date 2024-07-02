import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import {User} from "./models/Schema.js"
import mongoose from 'mongoose'
const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

let conn = await mongoose.connect("mongodb://localhost:27017/RUsers");

//post request for sign in
app.post('/Signin', (req, res) => {
 console.log(req.body)

 const NewUser = new User({
  Name: req.body.UserName,
  Email: req.body.Email,
  Password: req.body.Password,
  Phone:req.body.PhoneNumber
})
NewUser.save().then(()=>{
  console.log("User registered")
  res.status(200).json({msg:"User registered successfully"})
})


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})