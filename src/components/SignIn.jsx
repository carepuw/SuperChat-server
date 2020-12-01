import React from 'react'
import firebase from 'firebase/app';

import '../scss/SignIn.scss'

function SignIn({auth}) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="signIn_container">
      <button className="auth_button" onClick={signInWithGoogle}></button>
    </div>
  )
}

export default SignIn;