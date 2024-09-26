import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFiles(file) {
  // obtener el nombre original del archivo:
  const originalName = file.name;
  // generar nro aleatorio corto:
  const randomNro = Math.floor(Math.random() * 100);
  // extraer la extension del archivo:
  const extension = originalName.substring(originalName.lastIndexOf("."));
  // crear el nuevo nombre con el original + el nro random:
  const newFileName = `${originalName.replace(
    extension,
    ""
  )}_${randomNro}${extension}`;

  const storageRef = ref(storage, newFileName);
  return await uploadBytes(storageRef, file);
}
