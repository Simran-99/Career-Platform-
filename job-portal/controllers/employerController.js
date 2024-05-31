const Employer = require("../models/Employer");
const User = require("../models/User");

// Create a new employer
exports.createEmployer = async (req, res) => {
  const {
    email,
    password,
    name,
    phone,
    location,
    tagline,
    description,
    website,
  } = req.body;
  try {
    const user = new User({ email, password, user_role: "employer" });
    await user.save();

    const employer = await Employer.create({
      name,
      phone,
      location,
      tagline,
      description,
      website,
      user_id: user._id.toString(),
    });

    res
      .status(201)
      .json({ message: "Employer created successfully", employer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
