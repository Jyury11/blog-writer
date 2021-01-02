import AddDoc from '../../components/Services/AddDoc'
import UpdateDoc from '../../components/Services/UpdateDoc'
import DeleteDoc from '../../components/Services/DeleteDoc'

export default (req, res) => {
    switch (req.method) {
        case 'POST': {
            res.statusCode = 200
            console.log(req.body)
            if(req.body.id === null){
                new Promise((resolve, reject) => { AddDoc(resolve, reject, req.body.collection, req.body.params) })
                res.json({ message: 'Add Success' })
            }
            else
            {
                new Promise((resolve, reject) => { UpdateDoc(resolve, reject, req.body.collection, req.body.id, req.body.params) })
                res.json({ message: 'Update Success' })
            }
            break;
        }
        case 'DELETE': {
            new Promise((resolve, reject) => { DeleteDoc(resolve, reject, req.query.collection, req.query.id) })
            res.statusCode = 200
            res.json({ message: 'Delete Success' })
            break;
        }
        default: {
            res.statusCode = 405
            res.json({ message: 'Your Method Not Allowed' })
        }
    }
}
