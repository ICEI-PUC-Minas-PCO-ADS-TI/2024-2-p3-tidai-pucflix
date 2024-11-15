import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import db from "./firebaseConfig";
import {doc, setDoc } from "firebase/firestore";


const auth = getAuth();

export async function registerUser(email, password, name) {

      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
          const user = userCredential.user;
          
          const userDoc = {
            Email: user.email,
            Nome: name,
            Perfil: {
              1: {
                Kids: false,
                Nome: name,
                    Session: {
                        Assistidos: [],
                        Favoritos: [],
                        SessionID : ""
                    }
              }, //aqui, caso eu colocar 2 : {...} adicioanaria outro perfil
            }
          };

          const userRef = doc(db, "Usuarios", user.uid)
          setDoc(userRef, userDoc);
    
          console.log("Usuário cadastrado com sucesso:", user);
          return user;
      })

     .catch ((error) => {
      console.error("Erro ao cadastrar usuário:", error.message);
      throw error;
    })
  }

  export async function loginUser(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Login bem-sucedido:", user);
      return user;
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      throw error;
    }
  }

  export async function logoutUser() {
    try {
      await signOut(auth);
      console.log("Logout bem-sucedido.");
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
      throw error;
    }
  }

  export async function loginWithGoogle(onSuccess) {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuário logado com Google:", result.user);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Erro ao autenticar com Google:", error.message);
      throw error;
    }
  }
