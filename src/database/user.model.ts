import { model, models, Document, Schema } from "mongoose"

export interface IUser extends Document {
  name: string
  username: string
  churchId?: string
  email: string
  password?: string
  picture?: string
  bio?: string
  location?: string
  //   saved: Schema.Types.ObjectId[]
  joinedAt: Date
}

const UserScheme = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  churchId: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    default: "",
  },
  picture: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  //   saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: {
    type: Date,
    default: Date.now,
  },
})

const User = models.User || model("User", UserScheme)

export default User
