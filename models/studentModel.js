const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        required: true
    },
    collegeProgram: {
        type: String,
        required: true,
        trim: true
    },
    studentIdNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
});

studentSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Student', studentSchema);