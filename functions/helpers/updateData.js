const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");

module.exports = async (event) => {
  const { id, ...fields } = JSON.parse(event.body);
  try {
    const updatedData = await table.update([{ id, fields }]);
    return formattedReturn(201, updatedData);
  } catch (error) {
    return formattedReturn(500, { msg: "Something went wrong" });
  }
};
