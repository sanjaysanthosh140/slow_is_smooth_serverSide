import mongoose, { Schema, Document } from "mongoose";

export interface Iprodut extends Document {
  name: String;
  description: String;
  image: String;
}

const productSchema = new Schema<Iprodut>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});


const Product = mongoose.model("Product", productSchema);
export {Product}