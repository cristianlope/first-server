const path = require ('path');
const express = require ('express');
const router = express.Router();

router.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname,'../../public/carrito.html'));
});

module.exports = router;
