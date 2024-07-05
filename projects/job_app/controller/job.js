const JobModel = require("../model/job");

const createJob = async (req, res) => {
  try {
    // console.log(req.body);
    const newlyInsertedJob = await JobModel.create(req.body);
    // console.log(newlyInsertedJob._id);
    res.json({
      success: true,
      message: "Job created successfully",
    });
  } catch (err) {
    // next(err);
    console.log(err);
    res.json({
      success: false,
      messae: "Something went wrong, please try again after sometime",
    });
  }
};

const listJob = async (req, res) => {
  const minSalary = req.query.minSalary || 0;
  const jobsList = await JobModel.find({
    // salary: {
    //   $gt: minSalary,
    // },
    title: {
      $regex: new RegExp(`${req.query.title}`, "gi"),
    },
  });
  res.json({
    success: true,
    message: "Jobs list",
    results: jobsList,
  });
};

const updateJob = (req, res) => {
  res.json({
    success: true,
    message: "Update job API",
  });
};

const deleteJob = (req, res) => {
  res.json({
    success: true,
    message: "Delete job API",
  });
};

const jobController = {
  createJob,
  listJob,
  updateJob,
  deleteJob,
};

module.exports = jobController;
