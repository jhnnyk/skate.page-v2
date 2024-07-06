import { ref, watchEffect } from 'vue'
import { db } from '@/firebase/config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const getCollection = (collectionName) => {
  const documents = ref(null)
  const error = ref(null)

  // register the Firestore collection reference and query
  let collectionRef = collection(db, collectionName)
  let q

  q = query(collectionRef, orderBy('title'))

  const unsub = onSnapshot(
    q,
    (snap) => {
      let results = []
      snap.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id })
      })

      // update values
      documents.value = results
      error.value = null
    },
    (err) => {
      console.log(err.message)
      documents.value = null
      error.value = 'could not fetch data'
    }
  )

  watchEffect((onInvalidate) => {
    // unsub from prev collection when watcher is stopped (component unmounted)
    onInvalidate(() => unsub())
  })

  return { error, documents }
}

export default getCollection
