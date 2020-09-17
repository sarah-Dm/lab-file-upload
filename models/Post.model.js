

const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    content: String,
    creatorId: [{type:Schema.Types.ObjectId, ref:'User'}],
    picPatch: String,
    picName: String
  
  },
  {
    timestamps: true,
  }
);

module.exports = model('Post', postSchema);
