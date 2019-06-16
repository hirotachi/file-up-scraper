import ObjectId from "bson-objectid";

const idGen = () => {
  return ObjectId.generate();
};

export default idGen;