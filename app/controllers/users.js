const getItems = (req,res) => {
    res.send({list:['hola','mundo']});
};
const getItem  = (req,res) => {};
const createItem = (req,res) => {};
const updateItem = (req,res) => {};
const deleteItem = (req,res) => {};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem}