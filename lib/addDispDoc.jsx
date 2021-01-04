export default function addDispDoc(arr, id, addDoc) {
    let isDoc = false
    let ret = arr
    arr.map(obj => {
        if(obj.id === id){
            isDoc = true
        }
    })

    isDoc || ret.add(addDoc)
    return ret
}