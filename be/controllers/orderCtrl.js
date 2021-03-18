import Order from '../models/orderModel.js';

const order = {
  createOrder: async (req, res) => {
    try {
      const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        totalPrice,
      } = req.body;
      
      const newOrder = new Order({
        orderItems,
        user: req.user.id,
        shippingAddress,
        paymentMethod,
        shippingPrice,
        totalPrice,
        itemsPrice,
      });
      const createOrder = await newOrder.save();
      res.json(createOrder);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },
  getOrderById : async (req, res) => {
   try {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    )
  
    if (!order) return res.status(400).json({msg:"Không tìm thấy"});
    res.json(order)
   } catch (error) {
    return res.status(500).json(error.message);
   }
  }
};

export default order;
