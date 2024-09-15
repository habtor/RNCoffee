import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DBconnection from "./db/DBconnection.js";
import coffeeRoute from "./routes/coffee.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/coffee", coffeeRoute);

app.listen(PORT, () => {
  DBconnection();
  console.log(`Server is running on port ${PORT}`);
});
