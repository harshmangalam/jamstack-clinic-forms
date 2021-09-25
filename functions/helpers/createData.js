const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");

module.exports = async (event) => {
  const fields = JSON.parse(event.body);
  try {
    const createdData = await table.create([{ fields }]);
    return formattedReturn(201, createdData);
  } catch (error) {
    console.error(error)
    return formattedReturn(error.statusCode || 500, error);
  }
};
