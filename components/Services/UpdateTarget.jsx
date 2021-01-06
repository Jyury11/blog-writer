import { db } from '../../lib/db'

export default function UpdateTarget(resolve, reject, collection) {
    let batch = db.batch()
    let targetId = "";
    db.collection(collection)
    .get()
    .then(targets => {
        targets.docs.map(target => {
            targetId = target.data().writersId
            batch.update(target.ref, {
                name: "",
                priority: 0,
                writersId: ""
            })
        })
        batch.commit()
        resolve(targetId)
    })
    .catch(error => {
        console.log(error)
        reject([])
    })
}
