const { MongoClient } = require("mongodb");

const { mongoDBUri } = require("../config");

const client = new MongoClient(mongoDBUri);

exports.getTasks = async () => {
  try {
    await client.connect();
    await client.db("test").command({ ping: 1 });
    console.log("Pinged to database deployment. Successfully connected");

    const data = await client.db("test").collection("tasks").find({}).toArray();
    return data;
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }

  return [];
};

exports.saveTasks = async () => {};
