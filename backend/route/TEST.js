const express = require("express");
const router = express.Router();
const Controller = require("../controller/TEST");


router.post("/ajout", Controller.Ajout);
router.get("/get/:id",Controller.Get);

module.exports = router;