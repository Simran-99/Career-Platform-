const Admin = require("../models/Admin");
const User = require("../models/User");

exports.createAdmin = async (req, res) => {
  const { email, password, name, phone } = req.body;
  try {
    const user = new User({ email, password, user_role: "admin" });
    await user.save();

    const admin = await Admin.create({
      name,
      phone,
      user_id: user._id.toString(),
    });

    res.status(201).json({ message: "Admin created successfully", admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
