const express = require('express')
const app = express()
const PORT = 3001

const user = {
  name: 'Benjamin',
  age: 37,
  photo: 'https://s3-us-west-1.amazonaws.com/simple-blogger-react/avatar.png'
}

app.get('/api/user', (req, res) => {
  res.send(user)
})

app.listen(PORT, () => console.log(`SERVER IS UP ON PORT ${PORT}`))
