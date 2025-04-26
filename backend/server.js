const express = require("express")
const app = express()
const cookieParser = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors());


const TEST = require("./route/TEST");
app.use("/api/TEST", TEST)

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});