require('dotenv').config();
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1]; 

    if (!token) return res.sendStatus(401);

    try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        next();
    } catch (err) {
        return res.sendStatus(403); 
    }
}

module.exports = verifyToken;