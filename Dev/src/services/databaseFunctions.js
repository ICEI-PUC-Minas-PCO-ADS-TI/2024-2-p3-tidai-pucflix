import { collection, doc, getDocs, onSnapshot, updateDoc, getDoc } from "firebase/firestore";
import db from "./firebaseConfig";

export async function getUsers() {
  const usersCollection = collection(db, 'Usuarios');
  const userSnapshot = await getDocs(usersCollection);
  const userList = userSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return userList;
}

export async function getMovies() {
  const moviesCollection = collection(db, 'Filmes');
  const movieSnapshot = await getDocs(moviesCollection);
  const movieList = movieSnapshot.docs.map(doc => ({
    genero: doc.id,
    ...doc.data()
  }));
  return movieList;
}

export function getProfilesByUser(callback) {
  try {
    let userUID = localStorage.getItem("UID");
    const userDoc = doc(db, "Usuarios", userUID);

    const unsubscribe = onSnapshot(userDoc, (doc) => {
      if (doc.exists()) {
        console.log("Dados do usuário:", doc.data());
        callback(doc.data()); 
      } else {
        console.log("Nenhum documento encontrado!");
        callback(null); 
      }
    });

    return unsubscribe;

  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    throw error;
  }
}

export async function addProfile(userName, classificacao) {
  try {
    const userUID = localStorage.getItem("UID");
    const userDocRef = doc(db, "Usuarios", userUID);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const profiles = userDoc.data().Perfil || {};

      // Definir a estrutura do novo perfil
      const newProfile = {
        Kids: classificacao === "kids",
        Nome: userName,
        Session: {
          Assistidos: [],
          Favoritos: [],
          SessionID: ""
        }
      };

      for (let i = 1; i <= 5; i++) {
        const profileKey = i;
        if (!profiles[profileKey]) {
          profiles[profileKey] = newProfile;
          await updateDoc(userDocRef, { Perfil: profiles });
          console.log(`Perfil adicionado em ${profileKey}!`);
          return;
        }
      }

      console.log("Todos os slots de perfil estão ocupados!");
    } else {
      console.log("Usuário não encontrado!");
    }
  } catch (error) {
    console.error("Erro ao adicionar perfil:", error);
    throw error;
  }
}