const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'this field is required'],
    },
  },
  { timeStamps: true }
)

module.exports = mongoose.model('Goal', goalSchema)
