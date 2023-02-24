const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI="mongodb://0.0.0.0:27017/NoteBook"
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo");
    })
}
module.exports = connectToMongo;