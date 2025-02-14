export async function TryLogin(username, password) {
    console.log({username, password})
    const login = await fetch('http://localhost:3333/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    return login
}