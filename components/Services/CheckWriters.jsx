import { db } from '../../lib/db'
import UpdateBatch from './UpdateBatch'

export default function CheckWriters(resolve, reject, getCollection, updateCollection) {

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

            const nextDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

            const target = data.sort((a,b) =>{
                if (a.priority > b.priority) {
                    return -1;
                }
                else
                {
                    return 1;
                }
            })

            let batch = db.batch()
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

            UpdateBatch(updateCollection, target[0].id)

            data = data.filter((doc) => doc.id === 'info')
        }

        resolve(data)
    }).catch(error => {
        reject([])
    })

    // const writersInfo = writers.filter((doc) => doc.id === 'info')

    // const writerDate = new Date(writersInfo[0].date.seconds * 1000)
    // const now = new Date()

    // if(writerDate < now){

    //     const nextDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)

    //     const target = writers.sort((a,b) =>{
    //         if (a.priority > b.priority) {
    //             return -1;
    //         }
    //         else
    //         {
    //             return 1;
    //         }
    //     })

    //     let batch = db.batch()

    //     db.collection('writer')
    //     .get()
    //     .then(snapshot => {
    //         snapshot.docs.map(doc => {
    //             if(doc.id !== 'info'){
    //                 batch.delete(doc.ref)
    //             }
    //             else
    //             {
    //                 batch.update(doc.ref, { date: nextDate})
    //             }
    //         })

    //         batch.commit()
    //     })


    //     UpdateBatch('posts', target[0].id)
    // }
}
