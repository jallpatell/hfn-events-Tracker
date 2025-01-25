const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.render("home", { title: "Homepage" });
});

app.get("/event-registration", (req, res) => {
    res.render("event-registration", { title: "Event Registration" });
});

app.get("/new-seekers", (req, res) => {
    res.render("new-seekers", { title: "New Seekers Registration" });
});

app.get("/upcoming-sessions", (req, res) => {
    res.render("upcoming-sessions", { title: "Upcoming Sessions" });
});

app.get("/reports", (req, res) => {
    res.render("reports", { title: "Reports" });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
