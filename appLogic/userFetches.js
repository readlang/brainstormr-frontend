export async function authenticateFetch() {
    console.log('AuthenticateFetch')
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/authenticate`, {
        method: "get",
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function loginFetch(username, password) {
    console.log("LoginFetch")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/login`, {
        method: "post",
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username: username, password: password})
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function signupFetch(username, email, password) {
    console.log("SignupFetch")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`, {
        method: "post",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({userName: username, email: email, password: password})
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function updatePassword(oldPassword, newPassword) {
    console.log("UpdateFetch")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/updatePassword`, {
        method: "put",
        credentials: "include",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({password: oldPassword, newPassword: newPassword})
    })
    const data = await response.json()
    console.log(data)
    return data
}

export async function logoutFetch() {
    console.log("LogoutFetch")
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user/logout`, {
        method: 'get',
        credentials: "include"
    })
    const data = await response.json()
    console.log(data)
    return data
}