import { db } from '../../lib/db'

export default function AddDoc(resolve, reject, collection, params) {
    db.collection(collection)
    .add(params)
    .then(() => {
        alert('追加しました。')
    }).catch(error => {
        alert('追加に失敗しました。')
        console.log(error)
    })
}
