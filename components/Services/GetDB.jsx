import { db } from '../../lib/db'

export default function GetDB(resolve, reject, collection) {
    db.collection(collection)
    .get()
    .then(snapshot => {
        let data = []
        snapshot.forEach((doc) => {
            data.push(
                Object.assign({
                    id: doc.id
                }, doc.data())
            )
        })
        resolve(data)
    }).catch(error => {
        reject([])
    })
}
