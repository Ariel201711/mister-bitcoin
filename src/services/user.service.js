export const userService = {
    getUser,
}

const user = {
    name: 'Stav Sharon',
    balance: 100,
    transactions: []
}

function getUser() {
    return user
}