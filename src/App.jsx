import UploadForm from "./components/UploadForm";
import { uploadFiles } from "./firebase/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const handleUpload = async (file) => {
    try {
      const result = await uploadFiles(file);
      console.log(result);
      toast.success("¡Archivo subido exitosamente!", {
        position: "top-right",
        autoClose: 3000, // Se cierra automáticamente después de 3 segundos
      });
    } catch (error) {
      console.log(error);

      toast.error("Fallo en la subida, intenta más tarde", {
        position: "top-right",
      });
    }
  };
  return (
    <div>
      <UploadForm onUpload={handleUpload} />
      <ToastContainer />
    </div>
  );
}

export default App;
