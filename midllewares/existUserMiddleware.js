const jwt = require('jsonwebtoken');


const secret = '7hjfygjh45bnchn575ngjgfn5gffhgfdj54hgjn5da6eaad5efea6db9aeaa5c62a52fb91234bea83ba65544c710209fc'

function existUser(req, res, next) {
    const token = req.body.token || req.query.token || req.headers["token"]
    if (!token) {
        return res.status(403).send("A token is required for authen")
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = existUser