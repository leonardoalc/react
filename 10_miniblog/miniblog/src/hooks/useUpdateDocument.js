import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null
}

const updateReducer = (state, action) => {
    switch(action.type) {
        case "LOADING":
            return {loading: true, error: null}
        case "UPDATED_DOC":
            return {loading: false, error: null}
        case "ERROR":
            return  {loading: false, error: action.payload}
        default:
            return state
    }
}   

export const useUpdateDocument  = (docCollection) => {

    const [response, dispatch] = useReducer(updateReducer, initialState)

    // memory leak
    const [cancelled, setcancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled) return; else dispatch(action)
    }

    const updateDocument = async (id, data) => {
        checkCancelBeforeDispatch({type: "LOADING"})
        try {
            const docRef = await doc(db, docCollection, id)

            const updatedDocument = await updateDoc(docRef, data)

            checkCancelBeforeDispatch({
                type: "UPDATED_DOC",
                payload: updatedDocument
            })
        } catch (err) {
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: err.message
            })
        }
    }

    useEffect(() => {
        return () => setcancelled(true)
    }, [])

    return {
        updateDocument,
        response
    }
}
