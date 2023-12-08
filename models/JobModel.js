const mongoose = require("mongoose");
const JobModel = new mongoose.Schema({
    job_title : String,
    job_description : String,
    job_place : String,
    job_salary : Number,
    job_experience :Number,
    job_designation : String,
    job_applicants : Number,
    job_type : String,
    opening_date :Date,
    closing_date : Date

})
module.exports = mongoose.model("job",JobModel)