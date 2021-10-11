const { model } = require('mongoose');

module.exports = model('images', {
    imageSrc: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});