import {auth, firebase} from "../../instances/firebase"

export function SignInOut() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    if (auth.currentUser) {
        return (
            <div className="nav-login" onClick={auth.signOut}>
                Sign Out
            </div>
        )
    } else {
        return (
            <div className="nav-login" onClick={signInWithGoogle}>
                Sign In
            </div>
        )

    }


}
