import express from "express";
import dotenv from "dotenv";

import router from "./router";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT ?? 3000;

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})



