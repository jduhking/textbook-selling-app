
module.exports = function (router) {
    router.get('/pay', Payment)
}

async function Payment(req, res) {

    res.send('<h1>Payment</h1>')


}