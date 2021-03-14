import ProductMD from '../models/productModel.js';

const Product = {
  getAllProduct: async (req, res) => {
    try {
      const products = await ProductMD.find({});
      res.json(products);
    } catch (error) {
      res.status(400).json({ msg: 'Không tìm thấy' });
    }
  },
  getDetailProduct: async (req, res) => {
    try {
      const product = await ProductMD.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(400).json({ msg: 'Không tìm thấy' });
    }
  },
};
export default Product