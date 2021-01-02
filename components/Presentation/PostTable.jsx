import React from 'react'
import DeletePostModal from './DeletePostModal'
import UpdatePostModal from './UpdatePostModal'

export default function WriterList(props) {
    return (
        <div>
            <h2 className="flex rounded justify-center items-center bg-green-500 text-white m-10 text-2xl">
                {props.title}
            </h2>
            <div className="flex justify-center items-center">
                <table className="table-auto rounded justify-center items-center m-10 text-2xl">
                    <thead className="bg-blue-600 text-white m-5 p-2">
                        <tr>
                            <th className="m-5 p-2">名前</th>
                            <th className="m-5 p-2">優先度</th>
                            <th className="m-5 p-2">更新</th>
                            <th className="m-5 p-2">削除</th>
                        </tr>
                    </thead>
                    <tbody className="bg-blue-200 text-black m-5 p-2">
                    <React.Fragment>
                    {props.posts.map(post =>
                        <tr>
                            <td className="justify-center items-center m-10 p-2">{post.name}</td>
                            <td className="justify-center items-center m-10 p-2">{post.priority}</td>
                            <td className="justify-center items-center m-10 p-2">
                                <UpdatePostModal name={post.name} priority={post.priority} apiRoot="./api/updatePost" />
                            </td>
                            <td className="justify-center items-center m-10 p-2">
                                <DeletePostModal apiRoot="./api/delPost" id={post.id}/>
                            </td>
                        </tr>
                    )}
                    </React.Fragment>
                    </tbody>
                </table>
            </div>

        </div>
    )
}