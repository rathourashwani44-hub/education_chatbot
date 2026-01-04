

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const User = require("./models/User");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname ,"/public/dashboad.html")); // default page
});



// ================= DATABASE CONNECTION =================
mongoose.connect("mongodb://127.0.0.1:27017/loginApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" MongoDB Connected"))
.catch(err => console.error(err));

// ================= REGISTER =================
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: "Registration successful!" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.json({ success: false, message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: "Invalid password!" });

    res.json({ success: true, message: "Login successful!" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));


