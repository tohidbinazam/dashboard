import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userModel = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

// make password hash before save
userModel.pre('save', function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

// compare password
userModel.methods.matchPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export default model('User', userModel);
