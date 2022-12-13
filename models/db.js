

const mongoose= require('mongoose');
const config = require('../config/index');
mongoose.set('strictQuery',false);
mongoose.connect(config.mongouri, {
  useNewUrlParser: "true",
//   useFindAndModify: "false",
  useUnifiedTopology: "true"
});
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("application  is connected with mongoose");
})
