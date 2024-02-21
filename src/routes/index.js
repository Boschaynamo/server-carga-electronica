const { Router } = require('express');
const path = require('path');

const router = Router();

router.get('/data.cgi', (req, res) => {
    res.status(200).json({ x: 160, y: Math.floor(Math.random() * (30 - 10 + 1)) + 10 });
});

router.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'webpage', 'graph.html'));
});

router.get('/chart.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'library', 'chart.js'));
});

module.exports = router;
