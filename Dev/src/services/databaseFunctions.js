import { collection, getDocs } from "firebase/firestore";
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


