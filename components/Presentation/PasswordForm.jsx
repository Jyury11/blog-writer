import React from 'react'

export default function PasswordForm (props) {
  let input = "";
  return (
    <form action={props.aprRoot} method="post" className="m-10 border-b border-solid border-gray-300 ">
      <label>
        Password:
        <input type="password" defaultValue={input} onChange={props.func} />
      </label>
    </form>
  );
}
