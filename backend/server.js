const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const startServer = async () => {
  await connectDB();

  const app = express();

  app.use(cors({origin:"https://job-2c1p.vercel.app"}));
  app.use(express.json());
  app.use("/api/atm", require("./routes/atmRoutes"));

  app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
      message: err.message,
    });
  });

  app.listen(process.env.PORT || 5000, () => {
    console.log("Server Running");
  });
};

startServer();