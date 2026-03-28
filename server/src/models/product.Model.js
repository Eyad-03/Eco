import { pool } from "../config/db.js";

export const getAllProductItems = async () => {
  const result = await pool.query("select * from products");
  return result.rows;
};

export const getProductItem = async (productId) => {
  const result = await pool.query(
    "select * from products where product_id = $1",
    [productId],
  );
  return result.rows[0];
};

export const createNewProductItem = async () => {
  const result = await pool.query("insert into products () values()");
  return result.rows;
};

export const updateProductItems = async () => {
  const result = await pool.query(
    "update products set name=1$ where product_id = ",
  );
  return result.rows;
};
