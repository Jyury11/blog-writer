import { db } from '../../lib/db'
import UpdateBatch from './UpdateBatch'
import UpdateTarget from './UpdateTarget'

export default function CheckWriters(resolve, reject, getCollection, updateCollection, targetCollection) {

    db.collection(getCollection)
    .get()
    .then(async snapshot => {
        let data = []
        snapshot.forEach((doc) => {
            data.push(
                Object.assign({
                    id: doc.id
                }, doc.data())
            )
        })

        const writersInfo = data.filter((doc) => doc.id === 'info')
        const writerDate = new Date(writersInfo[0].date.seconds * 1000)
        const now = new Date()

        if(writerDate < now){


            // target collection
            let targetId = await new Promise((resolve, reject) => { UpdateTarget(resolve, reject, targetCollection) })

            // writers collection
            let batch = db.batch()
            const nextDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0)
            snapshot.docs.map(doc => {
                if(doc.id !== 'info'){
                    batch.delete(doc.ref)
                }
                else
                {
                    batch.update(doc.ref, { date: nextDate })
                }
            })
            batch.commit()

            data = []

            // posts collection
            UpdateBatch(updateCollection, targetId)

        }

        data = data.filter((doc) => doc.id !== 'info')

        resolve(data)
    }).catch(error => {
        reject([])
    })
}
