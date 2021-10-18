import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import firebaseAuthentication from "../pages/Login/Firebase/firebase.init";

firebaseAuthentication();


const useFirebase = () => {


    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [regError, setRegError] = useState('');
    const [displayName, setDisplayName] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // Email 
    const emailInput = (e) => {

        setEmail(e.target.value)
    }

    // password value
    const passInput = (e) => {

        setPassword(e.target.value)

    }

    const displayUserName = (e) => {

        setDisplayName(e.target.value)


    }



    // registration submit button
    const registerButton = (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((result) => {
                // Signed in 
                console.log(result.user);
                setUser(result.user)
                // ...
            }).catch(error => {
                setRegError(error.message)
            })



    }

    // existing sign in method
    const existingUser = () => {



        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                console.log(user)
                // ...
            })
            .catch((error) => {

                setError(error.message);
            });
    }
    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })

    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        emailInput,
        passInput,
        registerButton,
        displayUserName,
        existingUser,
        error,
        regError
    }

}
export default useFirebase;