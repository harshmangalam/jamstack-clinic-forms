const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");

module.exports = async (event) => {
  const { id } = JSON.parse(event.body);
  try {
    const deletedData = await table.destroy(id);
    return formattedReturn(201, deletedData);
  } catch (error) {
    return formattedReturn(error.statusCode || 500, error);
  }
};
