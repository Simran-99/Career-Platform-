const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectMongoDB, connectPostgreSQL, sequelize } = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const applicantRoutes = require("./routes/applicantRoutes");
const employerRoutes = require("./routes/employerRoutes");
const jobRoutes = require("./routes/jobRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", applicantRoutes);
app.use("/api", employerRoutes);
app.use("/api", jobRoutes);

// Sync Sequelize models
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("PostgreSQL models synced");
  } catch (error) {
    console.error("Error syncing PostgreSQL models:", error);
  }
};

// Connect to databases and start server
const startServer = async () => {
  try {
    await connectMongoDB();
    await connectPostgreSQL();
    await syncDatabase();
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
