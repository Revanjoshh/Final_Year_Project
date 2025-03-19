import React, { useState } from "react";
import "../styles/uploadpage.css";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploadedFiles([...uploadedFiles, selectedFile.name]);
      setSelectedFile(null);
    }
  };

  return (
    <div className="upload-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>🎬 Cine Crew Connect</h1>
        <ul>
          <li><a href="/feed">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>

      {/* Upload Section */}
      <div className="upload-box">
        <h2>📤 Upload Your Work</h2>
        <input type="file" onChange={handleFileChange} className="file-input" />
        <button onClick={handleUpload} className="upload-btn">Upload</button>
      </div>

      {/* Display Uploaded Files */}
      <div className="file-list">
        <h3>📂 Uploaded Files</h3>
        {uploadedFiles.length > 0 ? (
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        ) : (
          <p>No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
