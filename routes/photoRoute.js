const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const imageController = require('../controllers/imageController');

router.get('/', (req, res) => {
  res.send('This will be filled with pictures soon...');
});

router.post('/', upload.single('image'), function (req, res, next) {
  router.post('/', imageController.image_create_post);

  next();
});

module.exports = router;