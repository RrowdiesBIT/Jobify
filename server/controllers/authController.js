import Users from "../models/userModel.js";


export const register = async (req,res,next) => {
  const {firstName,lastName, email, password} = req.body;

  //validate fields
  if(!(firstName|| lastName || email || password)){
    next("Missing or wrong field. Please check and try again")
  }

  try {
    const userExist = await Users.findOne({email});
    if(userExist){
      next('User email id already exist');
      return;
    }

    const user = await Users.create({
      firstName,
      lastName,
      email,
      password
    });

    //user token
    const token = await user.createToken();

    res.status(201).send({
      success:true,
      message:"Account created Successfully",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accountType: user.accountType,
      },
      token,
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success:false,
      message:"Account creation not succesful",
      error:error.message,
    })
  }
}

export const signIn = async(req,res,next) => {
  const {email,password} = req.body;

  try {
    //validation
    if(!(email || password)){
      next("Please provide User credentials");
      return;
    }

    //find user by email id
    const user = await Users.findOne({email}).select("+password");

    if(!user){
      next('Invalid email or password ');
      return;
    }

    //compare password
    const isMatch = await user.comparePassword(password);

    if(!isMatch){
      next('Invalid Password');
      return;
    }

    user.password = undefined;

    const token = await user.createToken();

    res.status(201).json({
      success:true,
      message:'Login Succesfully',
      user,
      token,
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({success:false,message:error.message})
  }
}
