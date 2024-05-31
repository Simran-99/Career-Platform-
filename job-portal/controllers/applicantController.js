const Applicant = require("../models/Applicant");
const User = require("../models/User");

exports.createApplicant = async (req, res) => {
  const { email, password, f_name, l_name, phone, resume } = req.body;
  try {
    const user = new User({ email, password, user_role: "applicant" });
    await user.save();

    const applicant = await Applicant.create({
      f_name,
      l_name,
      phone,
      resume,
      user_id: user._id.toString(),
    });

    res
      .status(201)
      .json({ message: "Applicant created successfully", applicant });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
