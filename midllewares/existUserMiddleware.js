
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET

function existUser(req, res, next) {
    const token = req.body.token || req.query.token || req.headers["token"]
    if (!token) {
        return res.status(403).send("A token is required for authen")
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;

    } catch {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = existUser