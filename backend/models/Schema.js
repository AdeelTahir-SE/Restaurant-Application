import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Phone: { type: Number, required: true }
});

const FoodItemSchema = new mongoose.Schema({
    key: { type: Number, required: true, unique: true },
    type: { type: String, required: true },
    imgurl: { type: String, required: true },
    Name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true }
});

export const User = mongoose.model("User", UserSchema);
export const FoodItem = mongoose.model("FoodItem", FoodItemSchema);
