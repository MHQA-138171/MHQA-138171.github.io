const {
    getUsers,
} = require('../../models/users.model');

function httpGetUsers(req, res) {
    res.status(200).json(getUsers())
}
module.exports = {
    httpGetUsers,
}