const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');
const EmailsController = require('../controllers/EmailsController');


router.get('/', PagesController.index);

router.post('/email',
    EmailsController.store
);


module.exports = router;