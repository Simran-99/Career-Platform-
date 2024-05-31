const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Admin = sequelize.define("Admin", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(20), allowNull: false },
  phone: { type: DataTypes.STRING(20), allowNull: false },
  image: { type: DataTypes.STRING(20), defaultValue: "anony.png" },
  user_id: { type: DataTypes.STRING, unique: true, allowNull: false }, // Ensure user_id is a string
});

module.exports = Admin;
