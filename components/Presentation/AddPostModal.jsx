import React from "react";
import PasswordForm from "./PasswordForm"

let password = "";
let name = "";
let priority = 0;

export default function AddPostModal(props) {
  const [showModal, setShowModal] = React.useState(false);
  const priorityArr = [...Array(254).keys()].map(i => i++);
  return (
    <>
        <div className="m-5 bottom-5 right-5 lg:m-10 lg:bottom-10 lg:right-10 fixed">
            <button
                className="rounded-full bg-gradient-to-br from-red-300 to-pink-500 active:from-pink-600 active:to-pink-600 text-white text-xl lg:text-3xl font-bold uppercase px-5 py-3 lg:px-10 lg:py-8 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .5s ease" }}
                onClick={() => open(setShowModal)}
            >
                +
            </button>
            {showModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            追加しますか？
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
                        <div className="relative p-6 flex-auto">
                        <label  className="flex justify-left items-center border-b border-solid border-gray-300 text-black m-10 px-6 py-2">
                            名前：
                            <input defaultValue={name} onChange={nameChange} type="text" />
                        </label>
                        <label className="flex justify-left items-center border-b border-solid border-gray-300 text-black m-10 px-6 py-2">
                            優先度：
                            <select defaultValue={priority} onChange={priorityChange} >
                            <React.Fragment>
                            {priorityArr.map(priority =>
                                <option value={priority}>{priority}</option>
                            )}
                            </React.Fragment>
                            </select>
                        </label>
                        <PasswordForm apiRoot={props.apiRoot} func={handleChange} />
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
                            onClick={() => del(setShowModal)}
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

function nameChange(event) {
    name = event.target.value
}

function priorityChange(event) {
    priority = event.target.value
}

function del(func) {
    if(password !== "admin") {
        alert("パスワードが違います。")
    }
    else if(name === "")
    {
        alert("名前が不正です。")
    }
    else
    {
        func(false)
    }
}

function open(func) {
    name = "";
    priority = 0;
    func(true)
}