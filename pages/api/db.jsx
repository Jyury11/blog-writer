import AddDoc from '../../components/Services/AddDoc'
import UpdateDoc from '../../components/Services/UpdateDoc'
import DeleteDoc from '../../components/Services/DeleteDoc'

export default (req, res) => {

    let statusCode = 404
    let json = { 'message': "not found"}

    switch (req.method) {
        case 'POST': {
            statusCode = 200
            console.log(req.body)
            if(req.body.id === null){
                new Promise((resolve, reject) => { AddDoc(resolve, reject, req.body.collection, req.body.params) })
                json = { 'message': 'Add Success' }
            }
            else
            {
                new Promise((resolve, reject) => { UpdateDoc(resolve, reject, req.body.collection, req.body.id, req.body.params) })
                json = { 'message': 'Update Success' }
            }
            break;
        }
        case 'DELETE': {
            new Promise((resolve, reject) => { DeleteDoc(resolve, reject, req.query.collection, req.query.id) })
            statusCode = 200
            json = { 'message': 'Delete Success' }
            break;
        }
        default: {
            statusCode = 405
            json = { 'message': 'Your Method Not Allowed' }
        }
    }

    res.statusCode = statusCode
    res.json(json)
}
