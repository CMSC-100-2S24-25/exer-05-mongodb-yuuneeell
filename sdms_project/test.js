// import modules
import needle from 'needle';

// assign URLs to respective labeled variables
const saveStudentURL = `http://localhost:3000/save-student`;
const updateURL = `http://localhost:3000/update`;
const removeUserURL = `http://localhost:3000/remove-user`;
const purgeDatabaseURL = `http://localhost:3000/remove-all-user`;

// TEST POST FUNCTIONS ----------- (comment out after first run of this script!!! otherwise, there will be duplicates)

// SAVE STUDENT
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
        fname: "Timmy",
        lname: "Turner",
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

// // UPDATING ----------------- (uncomment when necessary)
// needle.post(
//     updateURL,
//     {
//         searchFName: "Mary Jane",
//         updateLName: "Parker"
//     },
//     (err, res) => {
//         console.log(res.body);
//     }
// );

// check if lname updated (uncomment get function below to check):
// needle.get(`http://localhost:3000/user?stdnum=201876543`,
//     (err, res) => {
//         console.log(`GET USER:`, res.body);
//     })


// TEST GET FUNCTIONS----------- (uncomment when needed in testing, you can modify however you want as well)

// // searches the user by the student number
// needle.get(`http://localhost:3000/user?stdnum=201954321`,
//     (err, res) => {
//         console.log(`GET USER:`, res.body);
//     })

// // searches the user by the student number (should return empty array)
// needle.get(`http://localhost:3000/user?stdnum=201954353`,
//     (err, res) => {
//         console.log(`GET USER:`, res.body);
//     })

// // gets all the members of the database
// needle.get(`http://localhost:3000/members`,
//     (err, res) => {
//         console.log(`GET ALL:`, res.body);
//     })

// REMOVE TESTING ------------------- (uncomment when necessary)

// // REMOVING USER
// needle.post(
//     removeUserURL,
//     {
//         stdnum: "202123456"
//     },
//     (err, res) => {
//         console.log(res.body);
//     }
// );

// REMOVE ALL USERS
// needle.post(
//     purgeDatabaseURL,
//     {},
//     (err, res) => {
//         console.log(res.body);
//     }
// );


