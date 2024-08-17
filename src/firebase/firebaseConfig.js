import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCToxVQiss03qgCTL-Ew6UxsigzuvSjgrM",
  authDomain: "contact-335dc.firebaseapp.com",
  projectId: "contact-335dc",
  storageBucket: "contact-335dc.appspot.com",
  messagingSenderId: "39100898939",
  appId: "1:39100898939:web:7716fec4e57f60c40b8cde"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
