const express = require('express')
const api_helper = require('./API_helper')
const app = express()

app.get('/api/notifications', (req, res) => {
    api_helper.make_API_call('https://randomuser.me/api/')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))