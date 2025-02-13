const HeartRate = require("../models/HeartRate");
const Patient = require("../models/Patient");

exports.addHeartRate = async (req, res) => {
  try {
    const newHeartRate = new HeartRate(req.body);
    await newHeartRate.save();
    res.status(201).json({ message: "Heart rate recorded", heartRate: newHeartRate });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getHeartRates = async (req, res) => {
  try {
    const { id } = req.params; 

    
    const patient = await Patient.findById(id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    const heartRates = await HeartRate.find({ patientId: id });

    res.status(200).json({
      patient: {
        id: patient._id,
        name: patient.name,
        age: patient.age
      },
      heartRates
    });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
