import React from "react"
import FetchClient from "../Services/FetchClient"
import PasswordForm from "./PasswordForm"

let selected = {
    'name': ""
};
let password = "";

export default function SelectModal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <div className="m-5 bottom-5 right-5 lg:m-10 lg:bottom-10 lg:right-10 fixed text-2xl">
            <button
                className="rounded-full bg-gradient-to-br from-red-300 to-pink-500 active:from-pink-600 active:to-pink-600 text-white text-xl lg:text-3xl font-bold uppercase px-5 py-3 lg:px-10 lg:py-8 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => open(setShowModal)}
            >
                +
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
                        <h3 className="text-xl md:text-3xl font-semibold">
                            参加者を選択してください。
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
                        <div className="relative p-2 flex-auto lg:m-6">
                        <select defaultValue={selected} onChange={selectChange} className="flex justify-center items-center border-b border-solid border-gray-300 text-black mx-10 my-2 px-20 py-2 lg:m-10">
                            <option key="none" value=""> </option>
                            <React.Fragment>
                            {props.posts.map(post =>
                                <option key={post.name} value={post.name}>{post.name}</option>
                            )}
                            </React.Fragment>
                        </select>
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
                            onClick={() => add(setShowModal, props)}
                        >
                            追加
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

function selectChange(event) {
    selected = event.target.value
}

function add(func, props) {
    if(password !== "coderdojo")
    {
        alert("パスワードが違います。")
    }
    else if(selected === "")
    {
        alert("参加者を選択してください。")
    }
    else
    {
        let setVal = {}
        props.posts.map(post => {
            if (post.name === selected) {
                setVal = post
            }
        })

        const body = {
            'collection': 'writer',
            'id': setVal.id,
            'params': {
                'name': setVal.name,
                'priority': Number(setVal.priority)
            }
        }
        FetchClient(`/api/db`, 'Post', body)
        func(false)
    }
}

function open(func) {
    password = ""
    selected = ""
    func(true)
}