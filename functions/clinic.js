const formattedResult = require("./helpers/formattedReturn");
const getData = require("./helpers/getData");
const createData = require("./helpers/createData");
const updateData = require("./helpers/updateData");
const deleteData = require("./helpers/deleteData");

exports.handler = async (event) => {
  if (event.httpMethod === "GET") {
    return await getData(event);
  } else if (event.httpMethod === "POST") {
    return await createData(event);
  } else if (event.httpMethod === "DELETE") {
    return await deleteData(event);
  }
};
