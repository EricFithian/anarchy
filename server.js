const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Hello World! We want anarchy</h1>`)
})

app.listen(PORT, () => {
    console.log(`We're causing mayhem on port ${PORT}`)
})