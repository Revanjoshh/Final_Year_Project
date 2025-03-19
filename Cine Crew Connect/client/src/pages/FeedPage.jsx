import React, { useState, useEffect } from "react";
import "../styles/styles.css"; // Import CSS for styling
import Navbar from "../components/Navbar"; // Import Navbar component (if you have one)

const FeedPage = () => {
  // Sample posts data (Replace with backend API later)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend (Replace with API call)
    fetch("http://localhost:5000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="feed-container">
      <Navbar /> {/* Navbar at the top */}
      <div className="feed-content">
        <h2 className="feed-title">🎬 Latest Posts</h2>
        {posts.length === 0 ? (
          <p className="no-posts">No posts available. Start uploading!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src={post.userProfile} alt="User" className="user-avatar" />
                <h3 className="post-username">{post.username}</h3>
              </div>
              <img src={post.image} alt="Post" className="post-image" />
              <p className="post-description">{post.description}</p>
              <button className="like-button">❤️ Like</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedPage;
