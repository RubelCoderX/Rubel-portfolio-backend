import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'
import bcrypt from 'bcrypt'

const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'admin',
  },
  profilePicture: { type: String, required: true },
})
// Pre-save hook to hash the password
userSchema.pre<TUser>('save', async function (next) {
  if (!this.isModified('password')) return next()
  const saltRounds = 10
  this.password = await bcrypt.hash(this.password, saltRounds)
  next()
})

// Method to compare passwords
userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password)
}
// Create and export the User model
export const UserModel = model<TUser>('User', userSchema)
