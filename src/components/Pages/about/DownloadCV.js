import React from 'react';
import { saveAs } from 'file-saver';
import { FaDownload } from "react-icons/fa6";

const DownloadCV = () => {
    
  const handleDownload = () => {
    const cvPath = '../../../../public/CV.pdf';
    
    fetch(cvPath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        saveAs(blob, 'cv.pdf');
      })
      .catch(error => console.error('Error downloading the file:', error));
  };


 


  return (
    <button onClick={handleDownload}>
      <h1><FaDownload/></h1>
    </button>
  );
};

export default DownloadCV;
