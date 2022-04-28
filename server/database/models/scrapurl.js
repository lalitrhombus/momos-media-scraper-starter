'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ScrapUrl extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ScrapUrl.init({
    id: DataTypes.STRING,
    url: DataTypes.STRING,
    depth: DataTypes.INTEGER,
    status: DataTypes.STRING,
    RequestId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ScrapUrl',
  });
  return ScrapUrl;
};