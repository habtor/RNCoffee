import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DBconnection from "./db/DBconnection.js";
import usersRoute from "./routes/users.js";
import coffeeRoute from "./routes/coffee.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/users", usersRoute);
app.use("/coffee", coffeeRoute);

app.listen(PORT, () => {
  DBconnection();
  console.log(`Server is running on port ${PORT}`);
});
