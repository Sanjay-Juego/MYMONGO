let conn = null;

const getMongooseConnection = () => {
  if (!conn) {
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;

    if (mongoose.connection._readyState != 1) {
      const uri = `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`;
      //const uri = "mongodb://localhost:27017/test";
      mongoose.connect(uri, {
        useNewUrlParser: true
      });
    }

    conn = mongoose;
  }

  return conn;
};

module.exports.getMongooseConnection = getMongooseConnection;
