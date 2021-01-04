import { db } from '../../lib/db'

export default function UpdateBatch(collection, id) {
    let batch = db.batch()

    db.collection(collection)
    .get()
    .then(snapshot => {
        snapshot.docs.map(doc => {
            let setPriority = 0
            if(doc.id !== id){
                setPriority = doc.data().priority + 1
            }
            batch.update(doc.ref, { priority: setPriority})
        })

        batch.commit()
    })
}
