const Patient = require("../models/Patient");

exports.addPatient = async (req, res) => {
  try {
    const newPatient = new Patient({ ...req.body, createdBy: req.user.id });
    await newPatient.save();
    res.status(201).json({ message: "Patient added", patient: newPatient });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
