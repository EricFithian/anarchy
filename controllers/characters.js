const express = require('express');
const router = express.Router();

router.get('/professorchaos', (req, res) => {
    res.send(`<h1>Nobody knows the secret identity of professor chaos!! His evil knows no limits</h1>`)
})

module.exports = router;