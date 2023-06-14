const express = require("express");
const UserService = require("./UserService");
const dbConnect = require("./helpers/db-connect");

const app = express();
const PORT = parseInt(process.env.PORT) || 5000;

app.use(express.json());

app.use("/user", UserService);

dbConnect().then(res => console.log("Connected to mongo database server"));

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
