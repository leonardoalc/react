import { useEffect, useState} from "react"
import { db } from "../firebase/config"
import { doc, getDoc,
} from "firebase/firestore"

export const useFetchDocument = (docCollection, id) => {
    const [document, setdocument] = useState(null)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(null)

    useEffect(() => {
        async function loadDocument() {

            setloading(true)

            try {
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)

                setdocument(docSnap.data())
            } catch (err) {
                console.log(err)
                seterror(err.message)

                
            }
            setloading(false)
        }

        loadDocument()
    }, [docCollection, id])
    
    return { document, loading, error}
}