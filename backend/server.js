const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// configuration with env
dotenv.config({ path: "backend/config/config.env" });
const port = process.env.PORT;

// connnet to DB after env config as it won't find env data

connectDB();

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
