import Starred from "../models/starred.model.js";

export const getStarred = async (req, res) => {
  Starred.findAll().then((starred) => {
    res
      .status(200)
      .json({ data: starred, message: "Starred list fetched successfully" });
  });
};

export const createStarred = async (req, res) => {
  Starred.create(req.body)
    .then((starred) => {
      res
        .status(200)
        .json({ data: starred, message: "Starred created successfully" });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

export const deleteStarred = async (req, res) => {
  Starred.destroy({ where: { id: req.body.id } }).then((starred) => {
    res.status(200).json({ message: "Starred deleted successfully" });
  });
};
