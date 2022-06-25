const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'this field is required'],
    },
    email: {
      type: String,
      required: [true, 'this field is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'this field is required'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
