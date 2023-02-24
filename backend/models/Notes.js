const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {     // This is the body of the note
        type: String,
        required: true
    },
    tag: {     // This is an array of tags
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});
module.exports = mongoose.model('notes', NoteSchema);