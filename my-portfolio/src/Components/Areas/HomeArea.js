import React from "react";
import "./Area.css";

export default function HomeArea() {
  return (
    <div
      className="home container"
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 className="name">Theingar Than Wai</h1>
    </div>
  );
}
