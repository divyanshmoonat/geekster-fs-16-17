const Razorpay = require("razorpay");

const ProductModel = require("../models/product");
const OrderModel = require("../models/order");

const keyId = "rzp_test_GLJrczK2bB2W8X";
const keySecret = "PmBODMfx3bFbMeR0iIrHSdA1";

const razorpay = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

const placeOrder = async (req, res) => {
  /**
   * 1. Check if the items are in stock
   * 2. Calculate the total amount of the order
   * 3. Check mode of payment if COD, no change, if ONLINE, then redirect the user to payment gateway
   * 4. Place order (Save details into DB)
   * 5. Send a order confirmation email / SMS
   * 6. Reduce inventory / stock
   */

  const productIds = req.body.items.map((product) => product.product);
  const productsList = await ProductModel.find({ _id: productIds });

  const areItemsInStock = req.body.items.every(
    (p) =>
      productsList.find((product) => product._id == p.product).stock >= p.qty
  );

  if (!areItemsInStock) {
    return res.status(400).json({
      success: false,
      message: "One or more ordered product(s) are out of stock",
    });
  }

  let totalAmountToPay = productsList.reduce((total, product) => {
    const productQty = req.body.items.find((p) => p.product == product._id).qty;
    return total + product.price * productQty;
  }, 0);

  if (totalAmountToPay < 500) {
    totalAmountToPay += 50; // Delivery Charges
  }

  // If the order total is above 1000, then do not allow the user to place COD Orders

  if (req.body.modeOfPayment === "ONLINE") {
    // Redirect the user to payment Gateway
    const orderDetailsForPg = {
      amount: totalAmountToPay * 100, // amount in the smallest currency unit (paisa)
      currency: "INR",
      receipt: "order_rcptid_124", // place your actual order id here
    };

    const pgResponse = await razorpay.orders.create(orderDetailsForPg);
    console.log(pgResponse);
    // Send these details to frontend
  }

  const orderDetails = {
    items: req.body.items,
    totalAmount: totalAmountToPay,
    deliveryAddress: req.body.deliveryAddress,
    billingAddress: req.body.deliveryAddress, // Same as delivery address
    modeOfPayment: req.body.modeOfPayment,
    orderStatus: "PENDING",
    user: req.user._id,
  };

  const { _id } = await OrderModel.create(orderDetails);

  // Todo: Send an email with order confirmation

  req.body.items.forEach(async (product) => {
    await ProductModel.findByIdAndUpdate(product.product, {
      $inc: { stock: -product.qty },
    });
  });

  res.json({
    success: true,
    message: "Order placed successfully",
    data: _id,
  });
};

const orderController = {
  placeOrder,
};

module.exports = orderController;
