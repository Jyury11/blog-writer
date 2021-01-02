import fetch from 'isomorphic-unfetch'

export default async function FetchCLient(url, method, body) {
    const headers = {
        'Content-Type': 'application/json'
    }

    const res = await fetch(url, {
        method,
        headers,
        body
    })

    return res
}