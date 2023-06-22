const Product = require("../models/product_model");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (featured) {
    queryObject.featured = featured;
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const products = await apiData;
  console.log(products);
  res.status(200).json({
    sucess: true,
    products,
    nbHits: products.length,
  });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am get all products testing" });
};

const addProduct = async (req, res) => {
  console.log(JSON.stringify(req.body));
  const { name, price, company } = req.body;
  const product = await Product.create({
    name,
    price,
    company,
  });

  res.status(201).json({
    success: true,
    message: "Successfully created Product",
    product,
  });
};

const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      sucess: false,
      message: "Product not found with that id",
    });
  }

  res.status(201).json({
    sucess: false,
    product,
  });
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
  addProduct,
  getSingleProduct,
};
