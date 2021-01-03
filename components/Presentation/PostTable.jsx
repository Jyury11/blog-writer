import React from 'react'
import DeletePostModal from './DeletePostModal'
import UpdatePostModal from './UpdatePostModal'

export default function PostsTable(props) {
    return (
        <div>
            <h2 className="flex rounded justify-center items-center bg-gradient-to-br from-blue-300 to-green-600 text-white m-2 lg:m-10 text-2xl">
                {props.title}
            </h2>
            <div className="flex rounded justify-center items-center bg-gradient-to-br from-blue-400 to-blue-700 m-1 md:w-1/2 lg:w-80 md:mx-auto">
                <table className="table-auto rounded justify-center items-center text-2xl my-1">
                    <thead className="text-white m-5 p-2">
                        <tr>
                            <th className="m-10 p-2">名前</th>
                            <th className="m-10 p-2">優先度</th>
                            <th>更新</th>
                            <th>削除</th>
                        </tr>
                    </thead>
                    <tbody className="bg-blue-300 text-black m-5 p-2">
                    <React.Fragment>
                    {props.posts.map(post =>
                        <tr key={post.id} >
                            <td className="m-10 p-2 border-2 border-solid border-gray-800">{post.name}</td>
                            <td className="m-10 p-2 border-2 border-solid border-gray-800">{post.priority}</td>
                            <td className="border-2 border-solid border-gray-800">
                                <UpdatePostModal name={post.name} priority={post.priority} id={post.id} />
                            </td>
                            <td className="border-2 border-solid border-gray-800">
                                <DeletePostModal id={post.id}/>
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