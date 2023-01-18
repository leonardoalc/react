import { useEffect, useState} from "react"
import { db } from "../firebase/config"
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where,
    QuerySnapshot
} from "firebase/firestore"

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setdocuments] = useState(null)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(null)

    // memory leak
    const [cancelled, setcancelled] = useState(false)

    useEffect(() => {
        async function loadData() {
            if (cancelled) {
                return
            }

            setloading(true)

            const collectionRef = await collection(db, docCollection)
            try {
                let q 

                // busca
                if (search) {
                    q = await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc"))
                } else {
                    q = await query(collectionRef, orderBy("createdAt", "desc")) // ordenando pelo createdAt do mais novo para o mais antigo
                }

                await onSnapshot(q, (querySnapshot) => {
                    setdocuments(
                        querySnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })

                setloading(false)

            } catch (err) {
                console.log(err)
                seterror(err)
                setloading(false)
            }
        }

        loadData()
    }, [docCollection, search, uid, cancelled])

    useEffect(() => {
      return () => setcancelled(true)
    }, [])
    
    return { documents, loading, error}
}