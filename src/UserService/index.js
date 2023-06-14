const { Router } = require("express");
const { postUser } = require("./controllers");
const makeExpressCallback = require("../shared/express-callback");

const router = Router();

router.post("/create-user", makeExpressCallback(postUser)); 

module.exports = router;