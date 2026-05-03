# Student Database Management System

## Project Details

**Project Title:** Student Database Management System using Node.js, Express, and MongoDB

**Author:** Eunel Jacob Joyosa

**Code Description:** This project is a simple Student Database Management System build with Node.js, Express, and MongoDB. This allows you and other users to perform basic CRUD (Create, Read, Update, Delete) operation on student records stored in a MongoDB database.
## How to use
### Step 1: Set Up The Project
1. **Download the Code:**
    - If you have the code in a repository, clone it:
    ```
    git clone [your-repo-link]
    cd [your-repo-folder]
    ```
    - If you have a ZIP file, extract it to a folder.
2. **Install Dependencies:**
    - Open a terminal in the project folder.
    - Run the following command to install required packages:
    ```
    npm install
    ```
3. **Set Up MongoDB:**
    - Make sure MongoDB is installed and running on your machine.
    - Create a database named `StudentDatabase` in MongoDB and name the collection `studentData` (you can either use MongoDB Compass or the commandline).
4. **Start the Server:**
    - Run `node .` or `node <main-script>` (the file wherein `app.listen` is included) to start the server.
    - The server should run on `http://localhost:3000`.
##
### Step 2: Testing the Endpoints
- There is a file named `test.js` included in the project folder.
- Run `node test.js` in another terminal and you can see the results either in the terminal where the main/server script is running or the terminal you executed `node test.js`.
- You can modify the `test.js` to however you would like to perform the CRUD operations
##

### Step 3: Troubleshooting
- **Server not starting**:
    - Make sure MongoDB is running.
    - Check if port `3000` is available.
- **Database issues**:
    - Ensure the database name is `StudentDatabase`.
    - Check if the `studentData` collection exists.
##

### Step 4: Stopping the Server
- To stop the server, press `Ctrl+C` in the terminal where you ran the server.