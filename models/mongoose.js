//Import the mongoose module
const mongoose = require("mongoose");

const CONFIG = require("../config");

//Import DB Models
const savedmsg = require("./savedmsg");
const rules = require("./rules");
const warns = require("./warns");
const groupConfigs = require("./groupConfigs");

mongoose.connect(`mongodb://${CONFIG.MONGO.HOST}:${CONFIG.MONGO.PORT}/${CONFIG.MONGO.DB}`)
    .then(() => {
        console.log("Successful connection to MongoDB");
    })
    .catch((err) => {
        console.log("Mongoose connection error due to: ", err);
        process.exit();
    });

mongoose.Promise = global.Promise;

//Expose the models for using elsewhere
module.exports = {
  savedmsg,rules,warns,groupConfigs
};
