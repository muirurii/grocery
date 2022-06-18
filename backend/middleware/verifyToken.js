const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer')) {
        return res.sendStatus(403);
    }

    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_SECRET, (error, decoded) => {
        if (error) {
            res.json(error)
        } else {
            req.email = decoded.email;
            next();
        }
    })
}

module.exports = verifyToken;