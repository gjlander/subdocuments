const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClassSchema = new Schema({
    subject: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Class', ClassSchema);
