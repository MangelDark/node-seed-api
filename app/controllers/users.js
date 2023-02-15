const {httpError} = require('../helpers/handleError');
const userModel = require('../models/users');

const getItems = async (req,res) => {
   try {
        const listAll = await userModel.find({});
        res.send({data:listAll});
   } catch (error) {
        httpError(req,error);
   }
};
const getItem  = async (req,res) => {
    try {
        const { id } = req.params;
        const resUser = await userModel.findById(id);
        res.send(resUser);
    } catch (error) {
        httpError(req,res);
    }

};
const createItem = async (req,res) => {
    try {
        const {name,age,email} = req.body;
        const resDetail = await userModel.create({
            name,age,email
        });
        res.send({data:resDetail});

    } catch (error) {
        httpError(req,error);
    }
};
const updateItem = (req,res) => {};
const deleteItem = (req,res) => {};


module.exports = { getItems, getItem, createItem, updateItem, deleteItem}