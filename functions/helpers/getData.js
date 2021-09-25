const { table } = require("./airtable");
const formattedReturn = require("./formattedReturn");

module.exports = async (event) => {
  try {
    const clinicData = await table.select().all();
    const formattedData = clinicData.map((data) => ({
      id: data.id,
      ...data.fields,
    }));
    return formattedReturn(200, formattedData);
  } catch (error) {
    console.log(error);
    return formattedReturn(500, { msg: "Something went wrong" });
  }
};
