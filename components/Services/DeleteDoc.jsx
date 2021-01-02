import { db } from '../../lib/db'

export default function DeleteDoc(resolve, reject, collection, id) {
    db.collection(collection)
    .doc(id)
    .delete()
}
