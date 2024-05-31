const { sequelize } = require("./config/db");

require("./models/Admin");
require("./models/Applicant");
require("./models/Employer");
require("./models/Job");
require("./models/JobApplication");
require("./models/User");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("PostgreSQL models synced");
  } catch (error) {
    console.error("Error syncing PostgreSQL models:", error);
  }
};

syncDatabase();
