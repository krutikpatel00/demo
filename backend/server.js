const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Sample route
app.get("/api", (req, res) => {
      res.send({ message: "Hello from the backend!" });
});

const PORT = 5000;
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});
