var express = require('express');
var router = express.Router();

var Job = require("../models/JobModel")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

router.post('/create',async function(req, res, next) {
  try {
    const job = new Job(req.body);
    await job.save()
    res.redirect("/all");
  } catch (error) {
    res.send(error);
  }
});

router.post('/update/:id',async function(req, res, next) {
  try {
    await Job.findByIdAndUpdate(req.params.id,req.body);
    res.redirect(`/all/${req.params.id}`)
  } catch (error) {
    res.send(error);
  }
});

router.get('/all',async function(req, res, next) {
  try {
    const jobs= await Job.find();
    res.render('all', { jobs:jobs });
  } catch (error) {
    res.send(error);
  }
});

router.get('/apply', function(req, res, next) {
  res.render('apply', { title: 'Express' });
});

router.get('/delete/:id',async function(req, res, next) {
try {
    await Job.findByIdAndDelete(req.params.id);
      res.redirect("/all")
  } catch (error) {
     res.send(error);
  }
});

router.get('/update/:id',async function(req, res, next) {
  try {
    const job = await Job.findById(req.params.id);
    res.render("update",{job:job});
  
   } catch (error) {
    res.send(error);
   }
});


module.exports = router;
