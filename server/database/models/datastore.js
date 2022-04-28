'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataStore.init({
    id: DataTypes.STRING,
    url: DataTypes.STRING,
    type: DataTypes.STRING,
    ScrapUrlId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataStore',
  });
  return DataStore;
};