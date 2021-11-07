const { getMongooseConnection } = require("../helper/dbConnect");

module.exports = async function createSchema(collectionStructure) {
  try {
    let conn = await getMongooseConnection();
    return await conn.Schema(collectionStructure);
  } catch (error) {
    console.log(error);
  }
};
