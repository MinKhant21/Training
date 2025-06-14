
const { User } = require("../../../../models/index");
const { comparePassword } = require("../../../helpers/auth");
const { responseSuccess } = require("../../../helpers/response");



const login = async(req,res,next)=>{  
  let username = req.body.username
    
  let user = await User.findOne(
    {where : {username}}
  )

  if(user == null) {
    throw new Error('Username is wrong');
  }

  
  let isMatch = await comparePassword(req.body.password,user.password);

  if(isMatch === false){
    throw new Error("Wrong Password")
  }
  responseSuccess(res, "Login");


  
  
 
 }



module.exports = {login};
