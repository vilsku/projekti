/*'use strict';
const pool = require('../database/db');
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
}*/

'use strict';
const express = require('express');
const pool = require('../database/db');
const promisePool = pool.promise();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const img_search_get = async (req, res) => {
    console.log('params', req.params.search);
    const param = req.params.search;
    const img = async () => {
        try {
            const [rows] = await promisePool.query(
                'SELECT * ' +
                'FROM images ' +
                'WHERE name = ? OR tag1 = ? OR tag2 = ? OR tag3 = ? ;', [param, param, param, param]);
            console.log(rows);
            return (rows);
        } catch (e) {
            console.log('error', e.message);
        }
    };
    const result = await img();
    await res.json(result);
};

const img_list_get = async (req, res) => {
    const imgs = async () => {
        try {
            const [rows] = await promisePool.query('SELECT * FROM images ORDER BY img_id DESC');
            return (rows);
        } catch (e) {
            console.log('error', e.message);
        }
    };
    const result = await imgs();
    await res.json(result);

};


const addImg = async (req, res) => {
    console.log(req.body);
    const params = [
        req.body.name,
        req.file.filename,
        req.body.tag1,
        req.body.tag2,
        req.body.tag3,
    ];
    try {
        const [rows] = await promisePool.execute(
            'INSERT INTO images (name, filename, tag1, tag2, tag3) VALUES (?,?,?,?,?); ',
            params);
        return rows;
    } catch (e) {
        console.log('error', e.message);
    }
    console.log('create', params);
    const result = await addImg(params);
    await res.json(result);
};
const deleteImg = async (req, res) => {
    const params = [
        req.body.id,
    ];
    try {
        const [rows] = await promisePool.execute(
            'DELETE FROM id WHERE img_id = ?;',
            params);
        return rows;
    } catch (e) {
        console.log('error', e.message);
    }
    console.log('delete', params);
    const img = await imgModel.deleteimg(params);
    await res.json(img);
};

module.exports = {
    img_list_get,
    addImg,
    deleteImg,
    img_search_get,
};