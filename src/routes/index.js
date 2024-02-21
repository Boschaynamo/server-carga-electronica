const { Router } = require('express');
const router = Router();

router.get('/data.cgi', (req,res)=>{res.status(200).json({x:160,y:Math.floor(Math.random() * (30 - 10 + 1)) + 10})});
router.get('/page', (req,res)=>{res.sendFile("C:/Users/nico_/Dropbox/Proyecto final - Carga electronica/4. Codigos/Interfaz Web/graph.html")});
router.get('/chart.js', (req,res)=>{res.sendFile("C:/chart.js")});

module.exports = router;