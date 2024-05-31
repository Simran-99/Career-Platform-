const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Employer = sequelize.define("Employer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(60), allowNull: false },
  phone: { type: DataTypes.STRING(20), allowNull: false },
  location: { type: DataTypes.STRING(20), allowNull: false },
  tagline: { type: DataTypes.STRING(60), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  website: { type: DataTypes.STRING(60) },
  logo: { type: DataTypes.STRING(25), defaultValue: "company.png" },
  date_joined: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  user_id: { type: DataTypes.STRING, unique: true, allowNull: false },
});

module.exports = Employer;
