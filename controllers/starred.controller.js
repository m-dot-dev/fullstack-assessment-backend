import Starred from "../models/starred.model.js";

export const getStarred = async (req, res) => {
  // pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = { pagination: {} };
  const total = await Starred.count();
  if (endIndex < total) {
    results.pagination.next = page + 1;
  }
  if (startIndex > 0) {
    results.pagination.previous = page - 1;
  }
  results.pagination.limit = limit;
  results.pagination.totalPages = Math.ceil(total / limit);
  results.pagination.currentPage = page;

  try {
    results.data = await Starred.findAll({
      offset: startIndex,
      limit: limit,
    });
    res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
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

export const updateStarred = async (req, res) => {
  if (!req.params.id)
    return res.status(400).json({ error: "Please provide id" });
  Starred.update(
    { product_rating: req.body.product_rating },
    { where: { id: req.params.id } }
  ).then((starred) => {
    res.status(200).json({ message: "Starred updated successfully" });
  });
};
