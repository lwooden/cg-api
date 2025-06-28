export interface CreateUserParams {
  name: string
  username: string
  churchId?: string
  email: string
  password?: string
  picture?: string
  bio?: string
  location?: string
  //   saved: Schema.Types.ObjectId[]
}
