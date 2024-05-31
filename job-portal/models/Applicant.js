const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Applicant = sequelize.define("Applicant", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  f_name: { type: DataTypes.STRING(20), allowNull: false },
  l_name: { type: DataTypes.STRING(20), allowNull: false },
  phone: { type: DataTypes.STRING(20), allowNull: false },
  resume: { type: DataTypes.STRING(25), allowNull: false },
  image: { type: DataTypes.STRING(25), defaultValue: "anony.png" },
  date_joined: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  user_id: { type: DataTypes.STRING, unique: true, allowNull: false }, // Ensure user_id is a string
});

module.exports = Applicant;
