require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingModel } = require("./model/HoldingModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require('./routes/auth');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000', // local backend
    'http://localhost:3001', // if you run frontend on this port
    "https://tradex-frontend.onrender.com", // deployed frontend
    'https://tradex-dashboard.onrender.com' // dashboard if needed
  ],
  credentials: true
}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});