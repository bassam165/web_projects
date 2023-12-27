function getUsers(req, res, next) {
    res.render("users",{
        title: "Users page"
    })
}

module.exports = {
    getUsers,
}