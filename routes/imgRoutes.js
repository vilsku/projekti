/*const express = require('express');
const router = express.Router();
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null , file.originalname);
  }
});
const upload = multer({storage: storage});
const imageController = require('../controllers/imgController');

router.get('/', (req, res) => {
  res.send('This will be filled with pictures soon...');
});

router.post('/', upload.single('image'), function (req, res, next) {
  router.post('/', imageController.image_create_post);

  next();
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const imgController = require('../controllers/imgController');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

router.get('/', (req, res) => {
    imgController.img_list_get(req, res);
});
router.get('/search/:search', (req, res) => {
    imgController.img_search_get(req, res);
});
//router.get('/:id', (req, res) => {
//imgController.img_get(req, res)
//});
//router.post('/', (req, res) => {
//  imgController.addImg(req, res)
//});
router.post('/', upload.single('image'), function (req, res, next) {
    router.post('/', imgController.addImg);

    next();
});

router.delete('/', (req, res) => {
    imgController.deleteImg(req, res)
});

module.exports = {
    router
};

router.delete('/', (req, res) => {
    imgController.deleteImg(req, res)
});

module.exports = {
    router
};