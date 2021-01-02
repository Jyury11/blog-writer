import { db } from '../../lib/db'

export default function DeleteDoc(resolve, reject, collection, id) {
    db.collection(collection)
    .doc(id)
    .delete()
    .then(() => {
        alert('更新しました。')
    }).catch(error => {
        alert('更新に失敗しました。')
        console.log(error)
    })
}
