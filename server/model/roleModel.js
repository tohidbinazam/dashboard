import { Schema, model } from 'mongoose';

const roleModel = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    permissions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Permission',
      },
    ],
    slug: {
      type: String,
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

// add slug before save
roleModel.pre('save', function (next) {
  if (!this.isModified('name')) {
    next();
  }
  this.slug = this.makeSlug();
  next();
});

// make slug
roleModel.methods.makeSlug = function () {
  return this.name.toLowerCase().split(' ').join('-');
};

export default model('Role', roleModel);
