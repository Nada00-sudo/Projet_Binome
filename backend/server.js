const express = require("express")
const app = express()
const cookieParser = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

//route authentification
const TEST = require("./route/TEST");
app.use("/api/TEST", TEST)

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});