// controller.js
// JOYOSA, EUNEL JACOB C.
// CMSC 100 C-1L
// Description: This JS script serves as the controller which contains the logic of the 
// web app that handles data reading, processing, storing and the like

// import modules
import mongoose, { mongo } from 'mongoose';

// connection string
await mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase');

// subject model
const Student = mongoose.model('StudentDatabase', {
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
}, 'studentData')

const homepage = (req, res) => {
    res.send('Exercise #6 - MongoDB [Homepage]');
}

const findStudents = async (req, res) => {
    res.send(await Student.find({ fname: req.query.fname }));
}

const findSubjectsPost = async (req, res) => {
    res.send(await Student.find({ fname: req.body.fname }));
}

export { homepage, findStudents, findSubjectsPost }