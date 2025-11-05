import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Halaman Home</h1>;
}

function About() {
  return <h1>Halaman About</h1>;
}

function Contact() {
  return <h1>Halaman Contact</h1>;
}

function Login() {
  return <h1>Halaman Login</h1>;
}

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
        <Link to="/contact" style={{ marginRight: "10px" }}>Contact</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
