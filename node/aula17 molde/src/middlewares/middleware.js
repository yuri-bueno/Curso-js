exports.middlewareGlobal = (req, res, next) => {
    if (req.body.cliente) {
        console.log(`arroz com${req.body.cliente}`)
    }
    next();
};

exports.checkCsrfError = (err, req, res, next) => {

    if (err && err.code === "EBADCSRFTOKEN") {
        return res.render("404")
    }

};

exports.csrfMiddleware = (req, res, next) => {

    res.locals.csrfToken = req.csrfToken()
    next();
};