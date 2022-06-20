import mongoose from "mongoose";
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
  const { page } = req.query;
  try {
    // const tours = await TourModel.find();
    // res.status(200).json(tours);
    const limit = 6;
    const startIndex = (Number(page) - 1) * limit;
    const total = await TourModel.countDocuments({});
    const tours = await TourModel.find().limit(limit);
    return res.status(200).json({
      data: tours,
      correntPage: Number(page),
      totalTour: total,
      numberOfPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(404).json({ message: "Someting went wrong" });
  }
};

export const getTour = async (req, res) => {
  const { id } = req.params;
  try {
    const tour = await TourModel.findById(id);
    res.status(200).json(tour);
  } catch (error) {
    res.status(404).json({ message: "Someting went wrong" });
  }
};

export const getToursByUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "user doesn't exist" });
  }
  const userTours = await TourModel.find({ creator: id });
  return res.status(200).json(userTours);
};

export const deleteTour = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No tour exist with id ${id}` });
    }
    await TourModel.findByIdAndDelete(id);
    return res
      .status(201)
      .json({ message: `Tour with id ${id} deleted successfully` });
  } catch (error) {
    return res.status(404).json({ message: "Someting went wrong" });
  }
};

export const updateTour = async (req, res) => {
  const { id } = req.params;
  const { title, discription, creator, imageFile, tags } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No tour exist with id ${id}` });
    }
    const updatedTour = {
      creator,
      title,
      discription,
      tags,
      imageFile,
      _id: id,
    };
    await TourModel.findByIdAndUpdate(id, updatedTour, { new: true });
    return res.status(201).json(updatedTour);
  } catch (error) {
    return res.status(404).json({ message: "Someting went wrong" });
  }
};

export const getToursBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  console.log(searchQuery);
  try {
    const title = new RegExp(searchQuery, "i");
    const tours = await TourModel.find({ title });
    return res.status(200).json(tours);
  } catch (error) {
    return res.status(404).json({ message: "Someting went wrong" });
  }
};

export const getToursByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const tours = await TourModel.find({ tags: { $in: tag } });
    return res.status(200).json(tours);
  } catch (error) {
    return res.status(404).json({ message: "Someting went wrong" });
  }
};

export const getRelatedTours = async (req, res) => {
  const tags = req.body;
  try {
    const tours = await TourModel.find({ tags: { $in: tags } });
    return res.status(200).json(tours);
  } catch (error) {
    return res.status(404).json({ message: "Someting went wrong" });
  }
};
