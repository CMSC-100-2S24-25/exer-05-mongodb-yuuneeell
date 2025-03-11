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
        let findStudent = await Student.find({
            fname: searchFName
        });

        // if either below returns true, return error message
        if (findStudent.length === 0) {
            return res.send('updateStudent(): Student not found.\n');
        }

        // updates the lname of the searched fname
        await Student.updateOne(
            { fname: searchFName },
            { $set: { lname: updateLName } }
        )

        console.log(await Student.find({ fname: searchFName }));

        res.send(`Student data updated successfully.\n`);
    },
    // removeUser
    removeUser: async (req, res) => {
        console.log('Request Body: ', req.body); // check whether req body is valid (for debugging)

        const { stdnum } = req.body;

        // variable to check whether find method returns a non-empty array or not
        let findStudent = await Student.find({
            stdnum: stdnum
        });

        console.log(`findStudent:`, findStudent); // for debugging

        // if either below returns true, return error message
        if (findStudent.length === 0) {
            return res.send(`removeUser(): Student ${stdnum} not found.\n`);
        }

        // deletes the student data of the requested stdnum
        await Student.deleteOne({ stdnum: stdnum });

        res.send(`Student ${stdnum} removed successfully.\n`);
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
        // store to student the returned array from find function
        const student = await Student.find({ stdnum: req.query.stdnum });

        // check whether student exist
        if (student.length > 0) {
            res.send(student);
        } else {
            res.send([]);
        }
    },
    // getAllMembers: function that fetches all members of the database
    getAllMembers: async (req, res) => {
        res.send(await Student.find({}));
    },
}

export default ctrlrFunctions;