const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/users');
const checkOrigin = require('../middleware/origin');
//TODO: localhost/users/----LISTA
router.get('/',getItems);

//TODO: localhost/users/:id ---- DETALLE
router.get('/:id',getItem);
router.post('/',checkOrigin,createItem);
router.patch('/:id',updateItem);
router.delete('/:id',deleteItem);

module.exports = router;