const mongoose = require("mongoose");
const chalk = require("chalk");

const connect = runServer => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection; //instance of connection
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log(chalk.blue("we are connected"));
    runServer();
  });
};

module.exports = { connect };
