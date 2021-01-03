import { db } from '../../lib/db'

export default function UpdateDoc(resolve, reject, collection, id, params) {
    db.collection(collection)
    .doc(id)
    .set(params)
    .then(snapshot => {
        resolve(snapshot)
    }).catch(error => {
        reject([])
    })
}
