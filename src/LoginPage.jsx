import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log("Logging in with:", { email, password });
    // You can replace this with an API call later
  };

  return (
    <div style={{ 
      maxWidth: "400px", 
      margin: "100px auto", 
      padding: "20px", 
      border: "1px solid #ccc", 
      borderRadius: "8px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ 
              width: "100%", 
              padding: "8px", 
              marginTop: "5px" 
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ 
              width: "100%", 
              padding: "8px", 
              marginTop: "5px" 
            }}
          />
        </div>
        <button 
          type="submit" 
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
