import React, { useState } from 'react';

const Doctor = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file)); // Generate a preview of the uploaded image
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Here you would handle the file upload logic, such as sending it to a server
      console.log('File selected:', selectedFile);
      
      // Reset the file input after submission
      setSelectedFile(null);
      setPreview(null);
      alert('File uploaded successfully!');
    } else {
      alert('Please select a file before submitting.');
    }
  };

  return (
    <div>
      <h1>Upload Prescription</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Display image preview */}
        {preview && (
          <div style={{ marginBottom: '20px' }}>
            <img src={preview} alt="Prescription Preview" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        )}

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Doctor;
