import { initializeApp } from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDZFci1rDqbn59US16XfZPTt_a87B1EVd4",
    authDomain: "pucflix.firebaseapp.com",
    databaseURL: "https://pucflix-default-rtdb.firebaseio.com",
    projectId: "pucflix",
    storageBucket: "pucflix.appspot.com",
    messagingSenderId: "614258166905",
    appId: "1:614258166905:web:4aa672135a1f7b3248d8a8"
  };
  const app = initializeApp(firebaseConfig);
  const database = firebase.database();

  export {database, app};