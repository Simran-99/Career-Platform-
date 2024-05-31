const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Job = sequelize.define("Job", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(20), allowNull: false },
  category: { type: DataTypes.STRING(60), allowNull: false },
  salary: { type: DataTypes.FLOAT(20), defaultValue: 0 },
  type: { type: DataTypes.STRING(20), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  date_posted: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  company_id: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Job;
