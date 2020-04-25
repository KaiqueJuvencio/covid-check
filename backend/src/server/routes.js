const router = require('express').Router();

const symptons = require('../resources/symptons');

router.get('/', (req, res) => res.status(200).send('up'));
router.get('/symptons', symptons.index);



module.exports = router;