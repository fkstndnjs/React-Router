import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/videos">Video</Link>
    </nav>
  );
}
