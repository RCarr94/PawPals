const Order = require('../../models/order');
const Dog = require('../../models/dog');

module.exports = {

};

// Cart is the unpaid order for the user
async function cart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}

// Add a dog to the cart
async function addToCart(req, res) {
    try {
        const cart = await Order.getCart(req.user._id);
        // add dog to cart
        await cart.addDogToCart(req.params.id);
        res.json(cart);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Update a Dog's 'hours' in the cart
async function setItemQtyInCart(req, res) {
    try {
        const { itemId, newQty } = req.body;
        const cart = await Order.getCart(req.user._id);
        await cart.setItemQty(itemId, newQty);
        res.json(cart);
    } catch (error) {
        res.status(400).json(error);
    }
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
    const cart = await Order.getCart(req.user._id);
    // mark order as paid = true
    await cart.checkout();

    res.json(cart);
}