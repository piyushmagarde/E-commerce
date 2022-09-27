const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
// const { Server } = require("http");

// configuration with env
dotenv.config({ path: "backend/config/config.env" });
const port = process.env.PORT;

// Handling uncaught exceptions
process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err.message}`)
  console.log('shuting down the server');
  process.exit(1);
})

// connnet to DB after env config as it won't find env data
connectDB();

const server = app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});

// Unhandled Promise Rejection

// process.on("unhandledRejection", err =>{
//   console.log(`Error: ${err.message}`);
//   console.log('shuting down the server');

//   server.close(()=>{
//     process.exit(1);
//   });
// });  If uncomment then remove catch block from database.js