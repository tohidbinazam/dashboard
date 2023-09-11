import { Schema, model } from 'mongoose';

const permissionModel = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// make slug before save
permissionModel.pre('save', function (next) {
  if (!this.isModified('slug')) {
    next();
  }
  this.slug = this.name.toLowerCase().split(' ').join('-');
  next();
});

export default model('Permission', permissionModel);
