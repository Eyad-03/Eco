import { getAllProductItems, getProductItem } from "../models/product.Model.js";
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";

export const getAllProductController = asyncHandler(async (req, res) => {
  try {
    const result = await getAllProductItems();
    if (result.length === 0) {
      return res
        .status(200)
        .json({ message: "No Product Item Yet. ", product: [] });
    }
    return res.status(200).json({ message: "fetch done!", product: result });
  } catch (err) {
    throw err;
  }
});

export const getProductController = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  console.log(productId);
  try {
    const result = await getProductItem(productId);
    if (result.length === 0) {
      return res.status(404).json({ message: "Not Found " });
    }
    return res.status(200).json({ message: "fetch done!", product: result });
  } catch (err) {
    throw err;
  }
});
