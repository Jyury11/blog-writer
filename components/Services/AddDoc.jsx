import { db } from '../../lib/db'

export default function AddDoc(resolve, reject, collection, params) {
    db.collection(collection)
    .add(params)
    .then(snapshot => {
        resolve(snapshot)
    }).catch(error => {
        reject([])
    })
}
