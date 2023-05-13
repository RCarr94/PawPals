const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    name: String,
    date: Date,
    category: String,
    details: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

module.exports = mongoose.model('Task', taskSchema);
