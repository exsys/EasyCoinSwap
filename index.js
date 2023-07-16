const express = require('express');
const path = require("path");
const app = express();

const allRoutes = require("./routes/allRoutes");

app.use(express.json());
app.use(express.static("public"));

app.use("/", allRoutes);

// always send back the index.html since angular requires this.
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));