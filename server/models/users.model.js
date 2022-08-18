const path = require('path');
const fs = require('fs');

let users = ['testing'];

function loadUsers() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', 'data', 'users.json'))
            .on('data', (data) => {
                users = JSON.parse(data);
            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', () => {
                resolve();
            })
    })
}
function getUsers() {
    return users;
}
module.exports = {
    loadUsers,
    getUsers,
}