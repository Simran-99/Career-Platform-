const Job = require("../models/Job");
const JobApplication = require("../models/JobApplication");

exports.createJob = async (req, res) => {
  const { title, category, salary, type, description, company_id } = req.body;
  try {
    const job = await Job.create({
      title,
      category,
      salary,
      type,
      description,
      company_id,
    });
    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.applyJob = async (req, res) => {
  const { job_id, applicant_id } = req.body;
  try {
    const application = await JobApplication.create({ job_id, applicant_id });
    res
      .status(201)
      .json({ message: "Applied for job successfully", application });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
