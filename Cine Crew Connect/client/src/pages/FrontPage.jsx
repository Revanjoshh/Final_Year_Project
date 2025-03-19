import React, { useState, useEffect } from "react";
import "../styles/frontpage.css";

const FrontPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend (currently using dummy data)
    const fetchedPosts = [
      { id: 1, username: "JohnDoe", image: "https://via.placeholder.com/400", caption: "New project completed!" },
      { id: 2, username: "JaneSmith", image: "https://via.placeholder.com/400", caption: "Cinematic vibes 🎬" },
      { id: 3, username: "FilmCrewX", image: "https://via.placeholder.com/400", caption: "Behind the scenes!" },
    ];
    setPosts(fetchedPosts);
  }, []);

  return (
    <div className="frontpage-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>🎬 Cine Crew Connect</h1>
        <ul>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Explore & Connect with Creative Minds</h2>
        <p>Find the best film industry professionals & showcase your work.</p>
      </header>

      {/* Posts Feed */}
      <div className="feed-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <h3>@{post.username}</h3>
            </div>
            <img src={post.image} alt="Post" className="post-image" />
            <p className="post-caption">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontPage;
