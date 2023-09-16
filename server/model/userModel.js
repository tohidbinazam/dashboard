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
    number: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
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

userModel.methods.removePass = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export default model('User', userModel);
