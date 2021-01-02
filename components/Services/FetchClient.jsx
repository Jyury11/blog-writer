import fetch from 'isomorphic-unfetch'

export default async function FetchCLient(url, method, strBody) {
    const headers = {
        'Content-Type': 'application/json'
    }

    const body = JSON.stringify(strBody)

    const res = await fetch(url, {
        method,
        headers,
        body
    })

    if (res.status === 200) {
        document.location.reload()
    }
    else
    {
        alert("失敗しました。")
    }

    return res
}