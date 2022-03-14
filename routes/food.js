const express = require("express");
const foodRouter = express.Router();

const Food = require("../models/food");

foodRouter.post("/add", async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const result = await newFood.save();
    res.send({ food: result, msg: "added successfully" });
  } catch (error) {
    console.log(error);
  }
});

foodRouter.get("/", async (req, res) => {
  try {
    const result = await Food.find();
    res.status(200).send({ foods: result, msg: "get all food" });
  } catch (error) {
    console.log(error);
  }
});
foodRouter.get("/:id", async (req, res) => {
  try {
    const result = await Food.findById({ _id: req.params.id });
    res.status(200).send({ searchedfoods: result, msg: "get all food" });
  } catch (error) {
    console.log(error);
  }
});

foodRouter.delete("/remove/:id", async (req, res) => {
  try {
    const result = await Food.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send("food deleted succesfully");
  } catch (error) {
    console.log(error);
  }
});
foodRouter.put("/:id", async (req, res) => {
  try {
    let result = await Food.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send("food updated successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = foodRouter;
