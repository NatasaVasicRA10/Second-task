import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAx0FoM3YOprsyh7LeAsqAnus0zxO3-Ykw',
  authDomain: 'note-app-bacde.firebaseapp.com',
  projectId: 'note-app-bacde',
  storageBucket: 'note-app-bacde.appspot.com',
  messagingSenderId: '929536919051',
  appId: '1:929536919051:web:be3bc803230f9a78aa690e',
  measurementId: 'G-LS6PLPG11Y'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);