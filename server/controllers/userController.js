import mongoose from "mongoose";
import Users from "../models/userModel.js";
import Jobs from "../models/jobsModel.js";

export const updateUser = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    contact,
    location,
    profileUrl,
    jobTitle,
    about,
  } = req.body;

  try {
    if (!firstName || !lastName || !email || !contact || !jobTitle || !about) {
      next("Please provide all required fields");
    }

    const id = req.body.user.userId;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No User with id: ${id}`);
    }

    const updateUser = {
      firstName,
      lastName,
      email,
      contact,
      location,
      profileUrl,
      jobTitle,
      about,
      _id: id,
    };

    const user = await Users.findByIdAndUpdate(id, updateUser, { new: true });

    const token = user.createToken();

    user.password = undefined;

    res.status(200).json({
      sucess: true,
      message: "User updated successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const id = req.body.user.userId;

    const user = await Users.findById({ _id: id });

    if (!user) {
      return res.status(200).send({
        message: "User Not Found",
        success: false,
      });
    }

    user.password = undefined;

    res.status(200).json({
      success: true,
      // user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "auth error",
      success: false,
      error: error.message,
    });
  }
};

export const applyForJob = async(req,res,next) =>{
  try {
    const {jobId} = req.params;
    const Id = req.body.user.userId;

    const user = await Users.findById({ _id: Id });

    // if (!mongoose.Types.ObjectId.isValid(jobId)) {
    //   return res.status(400).json({ message: error.message });
    // }

    if(!jobId || !user){
      return res.status(404).send({
        message:"JOb Id and User Id are required"
      })
    }

    //search for the job existance in the db
    const job = await Jobs.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    //check for if user has applied previously or not
    if (job.application.includes(Id)) {
      return res.status(400).json({ success:false, message: "Already applied for this job" });
    }

    job.application.push(Id);
    await job.save();

    return res.status(200).json({
      success:true,
      message:"Application Successful",
      //user
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      mesage:error.message,
    })
  }
}