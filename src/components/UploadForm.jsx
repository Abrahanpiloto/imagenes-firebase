import { useState } from "react";
import "../styles/UploadForm.css";
import { DNA } from "react-loader-spinner";

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // onUpload(file);
    // setFile(null);
    // e.target.reset();
    setIsUploading(true); // Iniciar el loading cuando comienza la subida
    try {
      await onUpload(file); // Subida del archivo
    } finally {
      setIsUploading(false); // Detener el loading cuando termine la subida
      setFile(null); // Limpiar el input
      e.target.reset(); // Resetear el formulario
    }
  };
  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <h1>Subir archivo</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        disabled={isUploading}
      />
      {isUploading ? (
        <div className="loader-container">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <button className="upload-button">Upload</button>
      )}
      {/* <button className="upload-button">Upload</button> */}
    </form>
  );
};

export default UploadForm;
