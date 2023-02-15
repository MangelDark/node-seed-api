const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/users');

//TODO: localhost/users/----LISTA
router.get('/',getItems);

//TODO: localhost/users/:id ---- DETALLE
router.get('/:id',getItems);
router.post('/',createItem);
router.patch('/:id',updateItem);
router.delete('/:id',deleteItem);

module.exports = router;