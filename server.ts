import * as dotenv from "dotenv";
import { App } from "./app";
dotenv.config();

new App().server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));