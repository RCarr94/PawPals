const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dogSchema = require('./dogSchema');

const lineDogSchema = new Schema({
    qty: {type: Number, default: 1},
    dog: dogSchema
}, {
  toJSON: { virtuals: true }
});

lineDogSchema.virtual('extPrice').get(function() {
    return this.qty * this.dog.price;
});

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lineDogs: [lineDogSchema],
    isPaid: { type: Boolean, default: false }
}, {
    timestamps: true
    toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
    return this.lineDogs.reduce((total, dog) => total + dog.extPrice, 0);
});

orderSchema.vurtyak('totalQty').get(function() {
    return this.lineDogs.reduce((total, dog) => total + dog.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
});

// Cart
orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        // query
        { user: userId, isPaid: false },
        // update
        { user: userId },
        // options
        { upsert: true, new: true }
    );
};


// Instance methods

// add a dog to cart (unpaid order)
orderSchema.methods.addDogToCart = async function (dogId) {
    const cart = this;
    // check if the dog already exists in the cart
    const lineDog = cart.lineDogs.find(lineDog => lineDog.dog._id.equals(dogId));
    if (lineDog) {
        // increment the qty
        lineDog.qty += 1;
    } else {
        // add the dog to the cart
        const dog = await mongoose.model('Dog').findById(dogId);
        cart.lineDogs.push({ dog });
    }
    return cart.save();
};

orderSchema.methods.setDogQty = function (dogId, newQty) {
    const cart = this;
    // find the lineDog
    const lineDog = cart.lineDogs.find(lineDog => lineDog.dog._id.equals(dogId));
    // If the dog exists and user is not setting it to 0 or less
    if (lineDog && newQty <= 0) {
        lineDog.remove();
    } else if (lineDog) {
        lineDog.qty = newQty;
    }

    return cart.save();
};

orderSchema.methods.clearCart = function () {
    const cart = this;
    cart.isPaid = true;
    return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);