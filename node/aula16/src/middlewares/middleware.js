module.exports = (req, res, next) => {
    if (req.body.cliente) {
        console.log(`arroz com${req.body.cliente}`)
    }
    next();
};