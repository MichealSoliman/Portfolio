import React, { useState } from 'react';
import './CV.css';

function CV() {
  const [showCV, setShowCV] = useState(false);

  // دالة لتبديل عرض الـ CV
  const toggleCV = () => {
    setShowCV(!showCV);
  };

  return (
    <section className="cv-section">
      <h2> Professional CV</h2>
      <div className="cv-buttons">
        <button onClick={toggleCV} className="cv-button" title="Preview CV">
          <i className="fas fa-eye"></i> Preview CV
        </button>
        <a href="/cv/michael-soliman.pdf" download className="cv-button" title="Download CV">
          <i className="fas fa-download"></i> Download CV

        </a>
        
      </div>

      {showCV && (
        <div className="cv-preview">
          <iframe
            src="/cv/michael-soliman.pdf"
            title="CV Preview"
            width="100%"
            height="600px"
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default CV;