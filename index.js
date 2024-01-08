require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ranjeet welocme to new family member ')
})
app.get('/twitter',(req,res) => {
  res.send('go to twiter official website')
})
app.get('/login',(req,res)=>{
  res.send('go to login page')
})
app.get('/youtube',(req,res)=>{
  res.send("Go to youtube page")

})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})