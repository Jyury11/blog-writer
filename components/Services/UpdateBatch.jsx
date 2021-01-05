import { db } from '../../lib/db'

export default function UpdateBatch(collection, id, batch) {
    db.collection(collection)
    .get()
    .then(snapshot => {
        snapshot.docs.map(doc => {
            let setPriority = 0
            if(doc.id !== id){
                setPriority = Number(doc.data().priority) + 1
            }
            batch.update(doc.ref, { priority: setPriority})
        })
    })
}
