require("dotenv").config()
const express = require("express")

const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("HELLO WORLD!")
})

app.get("/twitter", (req, res) => {
    res.send("SagarMuneshwar@twitter.com")
})
app.get("/login",(req, res)=>{
    res.send("<h1 style='padding:15px'>Please login at chai aur code</h1>")
})

app.get("/youtube", (req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})
app.listen(process.env.PORT, () => {
    console.log(`Express is running on port ${port}`);
})