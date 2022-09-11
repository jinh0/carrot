import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDoro4jNhQ_0usjiJEe1l36LEvH1A_NPGc',
  authDomain: 'project0-37291.firebaseapp.com',
  projectId: 'project0-37291',
  storageBucket: 'project0-37291.appspot.com',
  messagingSenderId: '849398065443',
  appId: '1:849398065443:web:db29c7ec801fb76e30c496',
  measurementId: 'G-3S11M14SQ8',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
