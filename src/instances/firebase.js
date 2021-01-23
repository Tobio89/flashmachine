import firebase from  'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import firebaseConfig from "./firebaseDetails"

firebase.initializeApp(
    firebaseConfig
)

const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth, firestore }