export const userService = {
    getLoggedinUser,
}

const user = {
    name: 'Stav Sharon',
    balance: 100,
    transactions: []
}

function getLoggedinUser() {
    return user
}