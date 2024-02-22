const { Router } = require('express');
const path = require('path');

const router = Router();

router.get('/data.cgi', (req, res) => {

    const corriente = Math.floor(Math.random() * (30 - 10 + 1)) + 10 ;
    const tension = Math.floor(Math.random() * (30 - 10 + 1)) * 10000;
    const potencia = Math.floor(Math.random() * (30 - 10 + 1)) + 10;


    res.status(200).json({ tension, corriente, potencia });
});

router.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'webpage', 'graph.html'));
});

router.get('/chart.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'library', 'chart.js'));
});

module.exports = router;
