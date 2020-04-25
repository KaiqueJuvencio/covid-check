
const database = require('../../database');
const { Sympton } = database.models;


const getAllSymptons =  async () => {
    return await Sympton.findAll();
}



module.exports = {
    getAllSymptons,
}