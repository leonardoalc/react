import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
  } from "firebase/auth";

import { useState, useEffect } from "react"

export const useAthentication = () => {
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(null)

    // cleanUp
    // deal with memory leak
    const [cancelled, setcancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()

        setloading(true)
        seterror(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setloading(false)

            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof(error.message))

            let systemErrorMessage 

            if (error.message.includes("password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email já registrado!"
            } else {
                systemErrorMessage = "Ocorreu um erro. Tente novamente mais tarde. "
            }

            seterror(systemErrorMessage)

        }

        setloading(false)
    }

    // logout
    const logout = () => {

        checkIfIsCancelled()

        signOut(auth)
    }

    const login = async (data) => {
        checkIfIsCancelled()

        setloading(true)
        seterror(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setloading(false)
        } catch (err) {
            let systemErrorMessage

            if (err.message.includes("user-not-found") || err.message.includes("wrong-password")) {
                systemErrorMessage = "Usuário ou senha incorretos."
            } else {
                systemErrorMessage = "Ocorreu um erro, tente mais tarde."
            }

            seterror(systemErrorMessage)
            setloading(false)
        }
    }

    useEffect(() => {
        return () => setcancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}