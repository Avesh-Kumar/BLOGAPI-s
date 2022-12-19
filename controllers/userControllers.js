const userService= require('../services/userServices')
exports.signup=async(req,res)=>{
  await userService.register(req.body).then((result)=>{
    res.status(200).send({"status":"success","user":result});
  }).catch(error =>{
    res.status(417).send({"status":"failed","error":error})
  });
};

exports.userLogin=async (req,res)=>{
  await userService.login(req.body).then((token)=>{
   res.status(200).send({"status":" user log-in successfully ","token":token})
  }).catch(error=>{
    res.status(401).send({"status":"failed","error":error});
  });
};
exports.allUsers=async(req,res)=>{
  await userService.getAllUsers().then(result=>{
    res.status(200).send({"status":"success","users":result}).catch(error=>{
      req.status(404).send({"status":"failed","errors":error});
    })
  })
}