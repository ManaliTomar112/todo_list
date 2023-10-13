const mongoose = require("mongoose");
function dbConnect(url) {
  mongoose.connect(url).then(() => console.log("DB connected Successfull"));
}
module.exports = dbConnect;
