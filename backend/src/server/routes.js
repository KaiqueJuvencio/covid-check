const router = require('express').Router();

const symptons = require('../resources/symptons');
const dashboard = require('../resources/dashboard');


router.get('/', (req, res) => res.status(200).send('up'));
router.get('/symptons', symptons.index);
router.get('/dashboard', dashboard.index);
router.get('/dashboard/world', dashboard.world);
router.get('/dashboard/countries', dashboard.countries);





module.exports = router;