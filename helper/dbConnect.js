let conn = null;

const getConnection = () => {
  if (!conn) {
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;
    const { MONGO_DB_HOST, MONGO_DB_PORT, MONGO_DB_NAME } = JSON.parse(
      process.env.MONGO
    );
    if (mongoose.connection._readyState != 1) {
      const uri = `mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`;
      mongoose.connect(uri, {
        useNewUrlParser: true,
      });
    }

    conn = mongoose;
  }

  return conn;
};

module.exports.getConnection = getConnection;
