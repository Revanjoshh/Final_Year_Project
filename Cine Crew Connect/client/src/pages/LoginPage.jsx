import React from "react";
import "../styles/styles.css"; // Import CSS

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>🎬 Cine Crew Connect</h2>
      <input type="email" placeholder="Enter Email" className="input-box" />
      <input type="password" placeholder="Enter Password" className="input-box" />
      <button className="submit-btn">Login</button>
      <p>Don't have an account? <a href="/register">Register Here</a></p>
    </div>
  );
};

export default LoginPage;
