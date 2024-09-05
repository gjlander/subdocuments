const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClassListSchema = new Schema({
    status: {
        type: String,
        enum: ['currently enrolled', 'passed', 'failed', 'not enrolled yet'],
        default: 'currently enrolled',
        required: true,
    },
    classRefId: {
        type: Schema.Types.ObjectId,
        ref: 'Class',
        required: true,
    },
});

const StudentSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        minLength: [2, 'min length is 2 chars'],
        maxLength: 100,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please use a valid email',
        ],
    },
    classList: {
        type: [ClassListSchema],
        default: () => [],
    },
});

module.exports = mongoose.model('Student', StudentSchema);
