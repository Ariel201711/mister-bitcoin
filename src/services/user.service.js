export const userService = {
    getLoggedinUser,
}

const user = {
    _id: '5aff6bdced1cf349f0b47b4d',
    name: 'Stav Sharon',
    balance: 100,
    transactions: []
}

function getLoggedinUser() {
    return user
}