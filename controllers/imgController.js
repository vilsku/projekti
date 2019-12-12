const express = require('express');
const pool = require('../database/db');
const promisePool = pool.promise();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const img_get = async (req, res) => {
    console.log("params",req.body);
    const param=req.params.id;
    const img = async () => {
        try {
            const [rows] = await promisePool.execute(
                'SELECT * FROM images WHERE img_id = ?;', [param]);
                return rows;
        } catch (e) {
            console.log('error', e.message);
        }

    };
    const result= await img();
    await res.json(result);
};
const img_list_get = async (req, res) => {
    const imgs = async () => {
        try {
            const [rows] = await promisePool.query('SELECT * FROM images');
            return (rows);
        } catch (e) {
            console.log('error', e.message);
        }
    };
    const result= await imgs();
    await res.json(result);

};
const addImg = async (req, res) => {
    console.log(req.body)
    const params = [
        req.body.name,
        req.file.filename,
    ];
    try {
        const [rows] = await promisePool.execute(
            'INSERT INTO images (name,filename) VALUES (?,?); ',
            params);
        return rows;
    } catch (e) {
        console.log('error', e.message);
    }
    console.log('create', params);
    const result = await imgModel.addimg(params);
    await res.json(result);
};
const deleteImg = async (req, res) => {
    const params = [
        req.body.id
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
    await res.json(img)
};


module.exports = {
    img_list_get,
    img_get,
    addImg,
    deleteImg
};
