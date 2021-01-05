import React from "react";
import FetchClient from "../Services/FetchClient";
import PasswordForm from "./PasswordForm"

let password = "";

export default function DeleteWriterModal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <div className="m-1 text-black">
            <button
                className="rounded bg-gradient-to-br from-gray-300 to-gray-500 hover:to-gray-700 hover:from-gray-700 py-1 px-3 mx-2"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => open(setShowModal)}
            >
                Select
            </button>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-1"
                >
                    <div className="relative w-full lg:w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            執筆者を選出しますか？
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-3 flex-auto lg:p-6 ">
                            <PasswordForm func={handleChange} />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={() => setShowModal(false)}
                        >
                            キャンセル
                        </button>
                        <button
                            className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={() => Set(setShowModal, props)}
                        >
                            選出
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
      </div>
    </>
  );
}

function handleChange(event) {
    password = event.target.value
}

async function Set(func, props) {
    if(password !== "coderdojo") {
        alert("パスワードが違います。")
    }
    else
    {
        const body = {
            'collection': 'target',
            'id': 'todayWriter',
            'params': {
                'name': props.target.name,
                'writersId': props.target.id,
                'priority': Number(props.target.priority)
            }
        }
        FetchClient(`/api/db`, 'Post', body)
        func(false)
    }
}

function open(func) {
    password = "";
    func(true)
}