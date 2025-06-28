import { model, models, Document, Schema } from "mongoose"

const ProductScheme = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "given"],
    default: "available",
    required: true,
  },
  category: {
    type: String,
    enum: ["home", "clothing", "shoes", "electronics", "other"],
    default: "other",
    required: true,
  },
  // TODO: make this a reference to the church
  churchId: {
    type: Schema.Types.ObjectId,
    ref: "Church",
    default: "",
  },
  ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  // ownerId: {
  //   type: String,
  //   required: true,
  // },
  picture: {
    type: String,
    default: "",
  },
  //   saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Product = models.User || model("Product", ProductScheme)

export default Product
