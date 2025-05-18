const express = require("express");
const path = require("path");
const app = express();
const { MongoClient, ServerApiVersion, Db } = require("mongodb");
const bodyParser = require("body-parser");
require("dotenv").config();

const { Student, Marks } = require("./models/student.js");
const { json } = require("body-parser");
const cors = require("cors");
const { Console } = require("console");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const collection = client.db("school").collection("students");
  console.log("Database Connected");

  app.get("/", (req, res, next) => {
    res.render("homepage");
  });
  app.get("/homepage", (req, res, next) => {
    res.render("homepage");
  });
  app.get("/seca", (req, res, next) => {
    let data = [];
    collection.find({ section: "A" }).sort({"roll" : 1}).toArray(function (err, result) {
      if (err) throw err;
      data = result;
      res.render("sectionA", { student: data });
    });
  });
  app.get("/secb", (req, res, next) => {
    let data = [];
    collection.find({ section: "B" }).sort({"roll" : 1}).toArray(function (err, result) {
      if (err) throw err;
      data = result;
      res.render("sectionB", { student: data });
    });
  });
  app.get("/avgmarks", async (req, res, next) => {
    const options = {
      projection: { _id: 0, dbms: 1, cn: 1, daa: 1, dp: 1, map: 1 },
    };
    let ADBMS = 0;
    let ACN = 0;
    let ADAA = 0;
    let ADP = 0;
    let AMAP = 0;
    let BDBMS = 0;
    let BCN = 0;
    let BDAA = 0;
    let BDP = 0;
    let BMAP = 0;

    collection.find({ section: "A" }, options).toArray(function (err, result) {
      if (err) throw err;
      for (i = 0; i < result.length; i++) {
        ADBMS = ADBMS + result[i].dbms;
        ACN = ACN + result[i].cn;
        ADAA = ADAA + result[i].daa;
        ADP = ADP + result[i].dp;
        AMAP = AMAP + result[i].map;
      }
      ADBMS = parseFloat((ADBMS / 100).toFixed(2));
      ACN = parseFloat((ACN / 100).toFixed(2));
      ADAA = parseFloat((ADAA / 100).toFixed(2));
      ADP = parseFloat((ADP / 100).toFixed(2));
      AMAP = parseFloat((AMAP / 100).toFixed(2));
      collection
        .find({ section: "B" }, options)
        .toArray(function (err, result) {
          if (err) throw err;
          for (i = 0; i < result.length; i++) {
            BDBMS = BDBMS + result[i].dbms;
            BCN = BCN + result[i].cn;
            BDAA = BDAA + result[i].daa;
            BDP = BDP + result[i].dp;
            BMAP = BMAP + result[i].map;
          }
          BDBMS = parseFloat((BDBMS / 100).toFixed(2));
          BCN = parseFloat((BCN / 100).toFixed(2));
          BDAA = parseFloat((BDAA / 100).toFixed(2));
          BDP = parseFloat((BDP / 100).toFixed(2));
          BMAP = parseFloat((BMAP / 100).toFixed(2));
          res.json([ADBMS, ACN, ADAA, ADP, AMAP, BDBMS, BCN, BDAA, BDP, BMAP]);
        });
    });
  });
  app.get("/attendence", async (req, res, next) => {
    const options = {
      projection: { _id: 0, attendence: 1 },
    };
    let Aattendence = 0;
    let Battendence = 0;
    collection.find({ section: "A" }, options).toArray((err, result) => {
      if (err) throw err;
      for (i = 0; i < result.length; i++) {
        Aattendence = Aattendence + result[i].attendence;
      }
      Aattendence = parseFloat((Aattendence / 100).toFixed(2));
      collection.find({ section: "B" }, options).toArray((err, result) => {
        if (err) throw err;
        for (i = 0; i < result.length; i++) {
          Battendence = Battendence + result[i].attendence;
        }
        Battendence = parseFloat((Battendence / 100).toFixed(2));
        res.json([Aattendence, Battendence]);
      });
    });
  });
  app.get('/deletestudent/:page/:id',(req,res,next)=>{
    let id = req.params.id
    let base = req.params.page
    collection.findOneAndDelete({ID : id}).then(
      res.redirect(`/${base}`)
    )
  })
  app.get("/populate", async (req, res, next) => {
    const newStudent = new Student({
      name: "Albert",
      roll: 1,
      section: "A",
      ID: "CSEA" + (1),
      dbms: Math.random() * 100,
      cn: Math.random() * 100,
      daa: Math.random() * 100,
      dp: Math.random() * 100,
      map: Math.random() * 100,
      attendence: Math.random() * 70 + 30,
    });
    const Existing = await collection.findOne({ ID: newStudent.ID });
      if (!Existing) {
        await collection.insertOne(newStudent);
      } else {
        console.log("Student Already in Database");
      }
    res.redirect(`/`)
  })
  
  app.get("/:id", async (req, res, next) => {
    let data = [];
    collection
      .find({ ID: req.params.id.toUpperCase() })
      .toArray(function (err, result) {
        if (err) throw err;
        data = result;
        res.render("student", { student: data[0] });
      });
  });
  app.listen(1500);
});