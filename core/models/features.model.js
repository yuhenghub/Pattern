var mongoose = require('mongoose');

/**
 * 企业模型
 */
var featuresSchema = new mongoose.Schema({
  //模型 ID
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'models',
    required: true
  },

  //名称
  sort: {
    type: Number,
    mix: 0,
    default: 0,
    required: true
  },

  //负责人
  title: {
    type: String,
    required: true
  },

  //链接
  url: {
    type: String
  },

  //缩略图
  thumbnail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Media'
  },

  //媒体
  media: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Media'
    }
  ],

  // 扩展
  extensions: mongoose.Schema.Types.Mixed
}, {
  collection: 'features',
  id: false
});

module.exports = mongoose.model('Features', featuresSchema);