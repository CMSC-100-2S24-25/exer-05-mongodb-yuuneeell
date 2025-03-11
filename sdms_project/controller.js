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

// controller functions object that contains required functions
// Note: implemented this object that contains the functions 
// for code organization and readability (just my preference)
const ctrlrFunctions = {
    // homepage 
    homepage: (req, res) => {
        res.send('Exercise #6 - MongoDB [Homepage]');
    },
    // saveStudent 
    saveStudent: async (req, res) => {
        console.log('Request Body: ', req.body); // check whether req body is valid (for debugging)

        const { stdnum, fname, lname, age } = req.body;

        // assign passed request parameters to a new Student object
        const newStudent = new Student({
            stdnum: stdnum,
            fname: fname,
            lname: lname,
            age: age
        })

        await newStudent.save() // save newStudent object

        // variable to check whether find method returns a non-empty array or not
        let isSaved = await Student.find({
            stdnum: stdnum,
            fname: fname,
            lname: lname,
            age: age
        })

        //console.log(`CALL FIND METHOD (isSaved): ${isSaved}`);   // print out newly saved student (for debugging)

        // check whether isSaved returned a non-empty array or not
        if (isSaved === undefined || isSaved.length == 0) {
            return res.json({ inserted: false });
        } else return res.json({ inserted: true });

    },
    // updateStudent 
    updateStudent: async (req, res) => {
        console.log('Request Body: ', req.body); // check whether req body is valid (for debugging)

        const { searchFName, updateLName } = req.body;

        // variable to check whether find method returns a non-empty array or not
        let findStudent = await Student.findOne({
            fname: searchFName
        });

        // if either below returns true, return error message
        if (findStudent === undefined || findStudent.length == 0) {
            return res.send('updateStudent(): Student not found.\n');
        }

        // updates the lname of the searched fname
        await Student.updateOne(
            { fname: searchFName },
            { $rename: { lname: updateLName } }
        )

        res.send(`Updated Student Data:\n`, await Student.findOne({ fname: searchFName }));
    },
    // removeUser
    removeUser: async (req, res) => {
        console.log('Request Body: ', req.body); // check whether req body is valid (for debugging)

        const { stdnum } = req.body;

        // variable to check whether find method returns a non-empty array or not
        let findStudent = await Student.findOne({
            stdnum: stdnum
        });

        // if either below returns true, return error message
        if (findStudent === undefined || findStudent.length == 0) {
            return res.send('removeUser(): Student not found.\n');
        }

        // deletes the student data of the requested stdnum
        await Student.deleteOne({ stdnum: stdnum });

        res.send(`Student Data Removed Successfully.\n`);
    },
    // purgeDatabase
    purgeDatabase: async (req, res) => {
        const isPurged = await Student.deleteMany({}); // this removes all the entries in the DB

        // check the acknowledged and deletedCount for the return messages
        if (isPurged.acknowledged && isPurged.deletedCount > 0) {
            return res.json({ deleted: true });
        } else {
            return res.json({ deleted: false });
        }
    },
    // getUserData
    getUserData: async (req, res) => {
        res.send(await Student.find({ fname: req.body.fname }));
    },
    // getAllMembers
    getAllMembers: async (req, res) => {
        res.send(await Student.find({ fname: req.body.fname }));
    },
}

export default ctrlrFunctions;