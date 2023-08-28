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

userModel.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default model('User', userModel);
