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
        //console.log("Dados do usuário:", doc.data()); <-- Mostra os dados do usuario que foi carregado no console
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

export async function updateProfile(profileKey, userName, classificacao) {
  try {
    const userUID = localStorage.getItem("UID");
    const userDocRef = doc(db, "Usuarios", userUID);
    const userDoc = await getDoc(userDocRef);
    var auxClass = classificacao === "kids"

    if (userDoc.exists()) {
      const profiles = userDoc.data().Perfil || {};

      const updatedProfile = {
        Kids: auxClass,
        Nome: userName,
        Session: {
          Assistidos: [],
          Favoritos: [],
        }
      };

      if (profiles[profileKey]) {
        profiles[profileKey] = {...profiles[profileKey], ...updatedProfile};
        await updateDoc(userDocRef, { Perfil: profiles });
        console.log(`Perfil ${profileKey} atualizado com sucesso!`);
      } else {
        console.log(`Perfil ${profileKey} não encontrado!`);
      }
    } else {
      console.log("Usuário não encontrado!");
    }
  } catch (error) {
    console.error("Erro ao atualizar perfil:", error);
    throw error;
  }
}

export async function deleteProfile(profileKey) {
  try {
    const userUID = localStorage.getItem("UID");
    const userDocRef = doc(db, "Usuarios", userUID);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const profiles = userDoc.data().Perfil || {};

      if (profiles[profileKey]) {
        delete profiles[profileKey]; // Remove o perfil do objeto
        await updateDoc(userDocRef, { Perfil: profiles }); // Atualiza no Firestore
        console.log(`Perfil ${profileKey} excluído com sucesso!`);
      } else {
        console.log(`Perfil ${profileKey} não encontrado!`);
      }
    } else {
      console.log("Usuário não encontrado!");
    }
  } catch (error) {
    console.error("Erro ao excluir perfil:", error);
    throw error;
  }
}

export async function addMovieToFavorites(movieId) {
  try {
      const profileID = localStorage.getItem("profileID")
      const userUID = localStorage.getItem("UID");
      const userDocRef = doc(db, "Usuarios", userUID);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
          const profiles = userDoc.data().Perfil || {};
          const profileKey = profileID + 1; 

          if (profiles[profileKey]) {
              const favorites = profiles[profileKey].Session.Favoritos || [];
              if (!favorites.includes(movieId)) {
                  favorites.push(movieId); // Adiciona o ID do filme aos favoritos
                  profiles[profileKey].Session.Favoritos = favorites; // Atualiza a lista de favoritos
                  await updateDoc(userDocRef, { Perfil: profiles });
                  console.log(`Filme ${movieId} adicionado aos favoritos!`);
              } else {
                  console.log(`Filme ${movieId} já está nos favoritos!`);
              }
          } else {
              console.log(`Perfil ${profileKey} não encontrado!`);
          }
      } else {
          console.log("Usuário não encontrado!");
      }
  } catch (error) {
      console.error("Erro ao adicionar filme aos favoritos:", error);
      throw error;
  }
}

export async function addMovieToWatched(movieId) {
  try {
      const profileID = localStorage.getItem("profileID")
      const userUID = localStorage.getItem("UID");
      const userDocRef = doc(db, "Usuarios", userUID);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
          const profiles = userDoc.data().Perfil || {};
          const profileKey = profileID + 1;

          if (profiles[profileKey]) {
              const watched = profiles[profileKey].Session.Assistidos || [];
              if (!watched.includes(movieId)) {
                  watched.push(movieId); // Adiciona o ID do filme à lista de assistidos
                  profiles[profileKey].Session.Assistidos = watched; // Atualiza a lista de assistidos
                  await updateDoc(userDocRef, { Perfil: profiles });
                  console.log(`Filme ${movieId} adicionado à lista de assistidos!`);
              } else {
                  console.log(`Filme ${movieId} já está na lista de assistidos!`);
              }
          } else {
              console.log(`Perfil ${profileKey} não encontrado!`);
          }
      } else {
          console.log("Usuário não encontrado!");
      }
  } catch (error) {
      console.error("Erro ao adicionar filme à lista de assistidos:", error);
      throw error;
  }
}