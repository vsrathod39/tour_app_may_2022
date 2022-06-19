import TourModel from "../models/tour.js";

export const createTour = async (req, res) => {
  const tour = req.body;
  const id = req.userId;
  const newTour = new TourModel({
    ...tour,
    creator: id,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    res.status(404).json({ message: "Someting went wrong" });
  }
};

export const getTours = async (req, res) => {
  try {
    const tours = await TourModel.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(404).json({ message: "Someting went wrong" });
  }
};
