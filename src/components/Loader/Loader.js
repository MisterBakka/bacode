import React, { useState, useEffect } from "react";
import "./Loader.css"; 

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <div className={`loader-container ${loading ? "visible" : "hidden"}`}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
