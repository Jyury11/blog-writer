import { db } from '../../lib/db'
import UpdateBatch from './UpdateBatch'

export default function CheckWriters(resolve, reject, getCollection, updateCollection, targetCollection) {

    db.collection(getCollection)
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

        const writersInfo = data.filter((doc) => doc.id === 'info')
        const writerDate = new Date(writersInfo[0].date.seconds * 1000)
        const now = new Date()

        if(writerDate < now){

            let batch = db.batch()

            // target collection
            let targetId = "";
            db.collection(targetCollection)
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
            })

            // writers collection
            const nextDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
            snapshot.docs.map(doc => {
                if(doc.id !== 'info'){
                    batch.delete(doc.ref)
                }
                else
                {
                    batch.update(doc.ref, { date: nextDate })
                }
            })

            // posts collection
            UpdateBatch(updateCollection, targetId, batch)

            batch.commit()
        }

        data = data.filter((doc) => doc.id !== 'info')

        resolve(data)
    }).catch(error => {
        reject([])
    })
}
