import { model, models, Document, Schema } from "mongoose"

export interface IUser extends Document {
  name: string
  username: string
  churchId?: Schema.Types.ObjectId
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
  churchId: {
    type: Schema.Types.ObjectId,
    ref: "Church",
    default: "68604e2e7eee3cd91577cc85",
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
