import React from 'react'
import DeleteWriterModal from './DeleteWriterModal'

export default function WriterList(props) {
    const [showDel, setShowDel] = React.useState(false);
    return (
        <div>
            <div className="flex rounded justify-between items-center bg-gradient-to-br from-blue-300 to-green-800 text-white m-10 text-2xl">
                <h2 className="p-5">
                    {props.title}
                </h2>
                <button
                    className="rounded bg-gradient-to-br from-gray-300 to-gray-500 hover:to-gray-700 hover:from-gray-700 text-black py-1 px-3 mx-2"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowDel(!showDel)}
                >
                    Edit
                </button>
            </div>
            <ul className="list-disc container mx-auto border-b border-solid border-gray-300 text-black m-10 text-2xl w-2/3">
            <React.Fragment>
            {props.writers.map(writer =>
                <li key={writer.id} className="text-center border-b border-solid border-gray-300 px-4">
                    <div className="flex justify-center items-center">
                        <h2 className="mx-10">
                            {writer.name}
                        </h2>
                        {showDel ? (
                        <>
                            <DeleteWriterModal delWriters={props.delWriters} id={writer.id} />
                        </>
                        ) : null}
                    </div>
                </li>
            )}
            </React.Fragment>
            </ul>
        </div>
    )
}