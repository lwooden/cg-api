import { model, models, Document, Schema, Types } from "mongoose"

export interface IChurch extends Document {
  churchId: Schema.Types.ObjectId
  name: string
  address: string
  city: string
  state: string
  zipcode: string
  description?: string
  picture?: string
  createdAt: Date
}

const ChurchSchema = new Schema({
  churchId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  picture: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Church = models.Church || model<IChurch>("Church", ChurchSchema)

export default Church
