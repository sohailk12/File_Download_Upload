const express = require('express');
const controllers = require('../controllers/controller.js');

const router = express();

router.post('/upload',controllers.fileUpload);

router.get('/download/:filename',controllers.fileDownload)

module.exports = router;
