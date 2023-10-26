import React, { useState, useEffect } from "react";
import "./Loader.css"; // Assurez-vous d'avoir un fichier CSS associé

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Supprimez cette ligne lorsque vous n'avez plus besoin du loader
  }, []);

  return (
    <div className={`loader-container ${loading ? "visible" : "hidden"}`}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
