import React from 'react'
import DeleteWriterModal from './DeleteWriterModal'

export default function WriterList(props) {
    return (
        <div>
            <h2 className="flex rounded justify-center items-center bg-green-500 text-white m-10 text-2xl">
                {props.title}
            </h2>
            <ul className="list-disc container mx-auto border-b border-solid border-gray-300 text-black m-10 text-2xl w-1/2">
            <React.Fragment>
            {props.writers.map(writer =>
                <li key={writer.id} className="text-center border-b border-solid border-gray-300 px-4">
                    <div className="flex justify-center items-center">
                        <h2>
                            {writer.name}
                        </h2>
                        <DeleteWriterModal id={writer.id} />
                    </div>
                </li>
            )}
            </React.Fragment>
            </ul>
        </div>
    )
}