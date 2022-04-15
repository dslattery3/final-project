const headers = { 'Content-Type': 'application/json' }

export function getQuizzes() {
    return fetch('/quizzes').then(r => r.json())
}

export function getCharacters() {
    return fetch('https://akabab.github.io/starwars-api/api/all.json').then(r => r.json())
}

export function postUserQuizzes(body) {
    return fetch(`/userquizzes`, { method: 'POST', headers, body }).then(r => r.json())
}

export function postLogin(body) {
    return fetch('/login', { method: 'POST', headers, body })
}

export function patchUser(user_id, body) {
    return fetch(`/users/${user_id}`, { method: "PATCH", headers, body }).then(r => r.json())
}

export function getItems() {
    return fetch('/items').then(r => r.json())
}

export function postPurchase(body) {
    return fetch('/useritems', { method: 'POST', headers, body }).then(r => r.json())
}