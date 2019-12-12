'use strict';
//const pool = require('../database/db');
const promisePool = pool.promise();

const addImage = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO projekti_photos (filename) VALUES (?);',
        params);
    return rows;
  }
  catch (e) {
    console.log('error', e.message);
  }
};

const image_create_post = async (req, res) => {
  const params = [
    req.file.filename]; // or req.body.filename if filename saved to body
  console.log('create', params);
  const image = await addImage(params);
  await res.json(image);
};

module.exports = {
  addImage,
  image_create_post
}