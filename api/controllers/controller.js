const Model = require('../../models/model');

module.exports = async () => {
    const data = await Model.find();

    return data;
};