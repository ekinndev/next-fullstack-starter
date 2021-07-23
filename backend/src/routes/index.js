const express = require('express');
const router = express.Router();

router.get('/me', (req, res, next) => {
    res.send('hello world this is Ekin');
});

module.exports = router;
