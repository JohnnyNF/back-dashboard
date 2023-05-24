import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { App } from "./app";
dotenv.config();
console.log(process.env.DB_URI)
mongoose.connect(process.env.DB_URI!);
new App().server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));