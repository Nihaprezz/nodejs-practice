console.log('connected')
const mainUrl = 'http://localhost:3000'

const $ = (html) => {
    return document.querySelector(html)
}

document.addEventListener("DOMContentLoaded", () => {
    
    $('#all-users').addEventListener("click", getAllUsers)
    $('#find-specific-user').addEventListener("submit", getOneUser)
    $('#new-name-req').addEventListener('submit', addUser)
})

function getAllUsers() {
    fetch(mainUrl + "/users")
    .then(resp => resp.json())
    .then(users => console.log(users))
}

function getOneUser(e){
    e.preventDefault();
    const userInput = e.currentTarget.number.value  

    fetch(mainUrl + `/users/${userInput}`)
    .then(resp => resp.json())
    .then(oneUser => console.log(oneUser))
    .catch(() => {
        console.log('error, unable to find user with the ID given.')
    })
}

function addUser(e){
    e.preventDefault();
    const name = e.currentTarget.name.value
    console.log('the new use you want to add is ', name)

    fetch(mainUrl + '/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name
        })
    })
    .then(resp => resp.json())
    .then(newUser => console.log(newUser))
    .catch(() => console.log('no name passed in'))
}
