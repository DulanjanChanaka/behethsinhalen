const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Medicine = require("./routes/medicine");
const TestInfo = require("./routes/testinfo");
const Article = require("./routes/medicine");

const serverless = require("serverless-http");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/medicine", Medicine)
app.use("/api/testinfo", TestInfo)
app.use("/api/article",Article)
app.get("/", (req, res) => res.status(200).json({ msg: "hi" }))

mongoose.connect(
    "mongodb+srv://behethsinhalen:beheth1994pw@behethsinhalen.nrraklz.mongodb.net/?retryWrites=true&w=majority&appName=behethsinhalen",
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }
).then(() => {
    console.log("DB Connection Successful!");
    app.listen( 5000, () => {
        console.log("Backend Server is Running!");
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

module.exports.handler = serverless(app);

//beheth1994pw
