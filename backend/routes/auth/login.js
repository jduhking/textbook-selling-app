
module.exports = function (router) {
    router.get('/login', Login)
}

async function Login(req, res) {

res.send('<h1>Login</h1>')




}