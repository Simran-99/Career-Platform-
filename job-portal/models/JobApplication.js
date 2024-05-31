const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const JobApplication = sequelize.define(
  "JobApplication",
  {
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Jobs", key: "id" },
    },
    applicant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Applicants", key: "id" },
    },
    date_applied: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    shortlisted: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    primaryKey: ["job_id", "applicant_id"],
  }
);

module.exports = JobApplication;
