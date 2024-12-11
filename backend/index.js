import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(
//   cors({
//     origin: "https://job-portal-gupa.vercel.app",
//     credentials: true,
//     optionsSuccessStatus: 200,
//   })
// );
app.use(
  cors({
    origin: "https://job-portal-web-dvf6.onrender.com",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://job-portal-gupa.vercel.app",
//       "https://job-portal-q6dj.onrender.com",
//     ], // Allow multiple origins
//     credentials: true, // Allow credentials (cookies)
//   })
// );

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server running at port ${process.env.PORT}`);
});
