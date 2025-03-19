import React, { useState } from "react";
import "../styles/profilepage.css";

const ProfilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newPost = {
        id: userPosts.length + 1,
        fileName: selectedFile.name,
        fileURL: URL.createObjectURL(selectedFile),
      };
      setUserPosts([newPost, ...userPosts]); // Add new post to list
      setSelectedFile(null);
    }
  };

  return (
    <div className="profile-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>🎬 Cine Crew Connect</h1>
        <ul>
          <li><a href="/feed">Home</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>

      {/* Profile Info */}
      <div className="profile-header">
        <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" />
        <h2>Username</h2>
        <p>@userhandle</p>
      </div>

      {/* Upload Post Section */}
      <div className="upload-box">
        <h2>📤 Upload a Post</h2>
        <input type="file" onChange={handleFileChange} className="file-input" />
        <button onClick={handleUpload} className="upload-btn">Upload</button>
      </div>

      {/* Display User Posts */}
      <div className="posts-section">
        <h3>📸 Your Posts</h3>
        {userPosts.length > 0 ? (
          <div className="posts-grid">
            {userPosts.map((post) => (
              <div key={post.id} className="post-card">
                <img src={post.fileURL} alt={post.fileName} />
                <p>{post.fileName}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No posts uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
