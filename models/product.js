const database = require("../models/database");
const { DataTypes } = require("sequelize");

const Product = database.define("Product", {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1024),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    tableName: 'products',
    timestamps: false,
  }
);

module.exports = Product;
  