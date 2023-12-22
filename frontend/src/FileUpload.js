import React from "react";
import { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("excelFile", file);
    console.log("formData:", formData);

    try {
      //use axios to make post req to backend
      await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("file uploaded succesfully");
    } catch (error) {
      console.error("error in uploading file: ", error.message);
    }
  };
  return (
    <div>
      <h2>Upload Excel Sheet</h2>
      <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" />
      <button onClick={handleFileUpload}>upload</button>
    </div>
  );
};

export default FileUpload;
