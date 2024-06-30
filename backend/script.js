import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//post request for sign in
app.post('/Signin', (req, res) => {
 console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})