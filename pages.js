const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('index');
});
router.get('/Register', (req, res)=> {
    res.render('Register');
});

router.get('/homepage', (req, res)=> {
    res.render('homepage');
});

router.get('/Payment', (req, res)=> {
    res.render('Payment');
});

router.get('/myTrips', (req, res)=> {
    res.render('myTrips');
});

router.get('/Status', (req, res)=> {
    res.render('Status');
});


module.exports = router;
