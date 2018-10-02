const express = require("express");
const router = express.Router();
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    //  cb(null, file.fieldname + '-' + Date.now())
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });
//const upload = multer({dest:"uploads/"});
//const cloudinary = require('cloudinary');
/*const config = require('../../config/keys').cloudnary;
cloudinary.config({
          cloud_name: config.cloud_name,
          api_key: config.api_key,
          api_secret: config.api_secret

});
console.log((api_secret));
*/
//Studnet Models
const Student = require("../../models/studentModel");

//@route GET api/students
//@desc GET all Studnets
//@Access Public

router.get("/", (req, res) => {
  Student.find().then(students => res.json(students));
});

//@route POST api/studnets
//@desc Create an Students
//@access Public
router.post("/", upload.single("src"), (req, res) => {
  console.log(req.file);
  const newStudent = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    title: req.body.title,
    nationality: req.body.nationality,
    skills: req.body.skills,
    src: req.file.filename,
    aim: req.body.aim,
    vision: req.body.vision,
    motivation: req.body.motivation,
    quote: req.body.quote,
    joinedDate: req.body.joinedDate
  });
  newStudent.save().then(student => res.json(student));
});

//route get student details
//desc get particular STUDENT
//ACCESS PUBLIC
router.get("/:_id", (req, res) => {
  Student.findById(req.params._id, (err, result) => {
    if (!result) {
      res.status(404).json({ success: false });
    } else {
      res.json({ success: true, result });
    }
  });
});
module.exports = router;
