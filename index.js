const express =  require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");

const PORT = process.env.PORT;
const pLanguages = [];

app.get("/", (req, res) => {
    res.status(200).render("index", {pNames: pLanguages });
});

app.get("/contact", (req, res) => {
    res.status(200).render("contact", {});
});

app.post("/", (req, res) => {
    const pLanguage =  req.body.pLanguages;
    pLanguages.push(pLanguage);
    res.redirect("/")
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});