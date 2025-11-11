const express = require("express")
const mongoose = require("mongoose")
const Hotel = require("./models/Hotels")

const app = express ();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:<db_password>@cluster0.p3a1cem.mongodb.net/")
.then(()=> console.log("YATTAA"))
.catch((err)=> console.log("GAGAL DEMIUNGGERR",err));

app.get("/hotels" , async (req,res) =>{
    const hotels = await hotel.find();
    res.json(hotels);
});

app.listen(3000,() => {
    console.log("berjalan di port 3000")
});