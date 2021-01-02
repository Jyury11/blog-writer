import { db } from '../../lib/db'

export default function UpdateDoc(resolve, reject, collection, id, params) {
    db.collection(collection)
    .doc(id)
    .set(params)
    .then(() => {
        alert('更新しました。')
    }).catch(error => {
        alert('更新に失敗しました。')
        console.log(error)
    })
}
