// import modules
import needle from 'needle';

// assign URLs to respective labeled variables
const saveStudentURL = `http://localhost:3000/save-student`;
const updateURL = `http://localhost:3000/update`;
const removeUserURL = `http://localhost:3000/remove-user`;
const purgeDatabaseURL = `http://localhost:3000/remove-all-user`;
const getUserURL = `http://localhost:3000/user?stdnum='201954321'`;
const getAllURL = `http://localhost:3000/members`;

// TEST GET FUNCTIONS-----------
// searches he user by the student number
needle.get(getUserURL, (err, res) => {
    console.log(res.body);
})

// gets all the members of the database
needle.get(getAllURL, (err, res) => {
    console.log(res.body);
})

// TEST POST FUNCTIONS -----------
// SAVING STUDENTS POST
// student 1
needle.post(
    saveStudentURL,
    {
        stdnum: "201876543",
        fname: "Mary Jane",
        lname: "Watson",
        age: "21"
    },
    (err, res) => {
        console.log(res.body);
    }
);

// student 2
needle.post(
    saveStudentURL,
    {
        stdnum: "201954321",
        fname: "Peter",
        lname: "Parker",
        age: "20"
    },
    (err, res) => {
        console.log(res.body);
    }
);

// student 3
needle.post(
    saveStudentURL,
    {
        stdnum: "202067890",
        fname: "Ben",
        lname: "Tennyson",
        age: "23"
    },
    (err, res) => {
        console.log(res.body);
    }
);

// student 4
needle.post(
    saveStudentURL,
    {
        stdnum: "202123456",
        fname: "Timmy Turner",
        lname: "Watson",
        age: "22"
    },
    (err, res) => {
        console.log(res.body);
    }
);

// student 5
needle.post(
    saveStudentURL,
    {
        stdnum: "202589012",
        fname: "Mabel",
        lname: "Pines",
        age: "25"
    },
    (err, res) => {
        console.log(res.body);
    }
);

// UPDATING
needle.post(
    updateURL,
    {
        searchFName: "Mary Jane",
        updateLName: "Parker"
    },
    (err, res) => {
        console.log(res.body);
    }
);

// REMOVING USER
needle.post(
    removeUserURL,
    {
        stdnum: "202123456"
    },
    (err, res) => {
        console.log(res.body);
    }
);

// REMOVE ALL USERS
needle.post(
    purgeDatabaseURL,
    {},
    (err, res) => {
        console.log(res.body);
    }
);


