const express = require('express');
const router = express.Router();
const imgController = require('../controllers/imgController');

router.get('/', (req, res)  =>  {
    imgController.img_list_get(req, res);
});
router.get('/:id', (req, res) => {
    imgController.img_get(req, res)
});
router.post('/', (req, res) => {
    imgController.addImg(req, res)
});

router.delete('/', (req, res) => {
    imgController.deleteImg(req, res)
});

module.exports = {
    router

};