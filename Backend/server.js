require('dotenv').config()
const app = require('./src/app')
const path = require('path')

app.use(require('express').static(path.join(__dirname, '../Frontend/dist')))

app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist/index.html'))
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})