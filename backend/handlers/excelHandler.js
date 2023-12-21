const { connectDatabase, promisePool } = require("../config/database");
const ExcelJS = require("exceljs");

exports.home = async (req, res, next) => {
  res.json("YOu can upload your excel file here");
};

exports.upload = async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded");
  }
  const excelFile = req.files.excelFile;

  try {
    //fucntion to handle excel file process
    const data = await processExcel(excelFile);

    //function to insert data into MySQL
    await insertDataIntoMySQL(data);

    res.send("file uploaded and data inserted into MySQL");
  } catch (error) {
    console.error("error in processing/uploading excel file", error);
    res.status(500).send("Internal server error");
  }
};

async function processExcel(file) {}

async function insertDataIntoMySQL(data) {
  const query = "INSERT INTO emp_details (";
}
