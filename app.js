const express = require('express')
const app = express()
const port = 3000
const app = mongodb()

app.get('/', (req, res) => res.send(''))

//MongoDB Database Config Link
mongodb+srv://solomonelkelani:campbell1996@cluster0-eg3u3.mongodb.net/test?retryWrites=true&w=majority

app.listen(port, () => console.log(`Listening on port ${port}!`))
