import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "30px" }}>
      <Link
        style={{
          border: "1px solid black",
          padding: "10px 10px",
          marginRight: "20px",
        }}
        to="/"
      >
        HOME
      </Link>
      <Link
        style={{
          border: "1px solid black",
          padding: "10px 10px",
        }}
        to="/videos"
      >
        Video
      </Link>
    </nav>
  );
}
