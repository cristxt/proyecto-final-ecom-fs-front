import React from 'react';
import './FileInput.css'; 
const FileInput = ({ label, accept, onChange }) => {
  return (
    <div className="file-input-container">
      {label && <label htmlFor="file-input" className="file-input-label">{label}</label>}
      <input
        id="file-input"
        type="file"
        accept={accept}
        onChange={onChange}
        className="file-input"
      />
    </div>
  );
};

export default FileInput;
