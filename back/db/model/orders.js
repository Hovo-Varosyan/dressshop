const { Schema, model, Types } = require("mongoose");

const orderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'product', required: true },
  price: Number,
  variant: String,
  size: String,
  quantity: { type: Number, default: 1 }
}, { _id: false });

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  items: [orderItemSchema],
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'shipped', 'delivered', 'cancelled'], 
    default: 'pending' 
  },
  shippedAt: { type: Date },     
  deliveredAt: { type: Date },   
  cancelledAt: { type: Date }    
}, { timestamps: true });
