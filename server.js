const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const patientRoutes = require("./routes/patientRoutes");
const heartRateRoutes = require("./routes/heartRateRoutes");

connectDB();
const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/patients", patientRoutes);
app.use("/heart-rate", heartRateRoutes);

app.listen(process.env.PORT, () => console.log(` Server running on port ${process.env.PORT}`));
