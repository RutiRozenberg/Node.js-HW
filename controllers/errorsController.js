
const app = require('express').Router();


app.get('*', (req, res) => {
    res.status(404).send('you have a mistake at the address')
})

app.use((err, req, res) => {
    res.status(500).send('There is currently an error On the server,try again later')

})


module.exports = app;
