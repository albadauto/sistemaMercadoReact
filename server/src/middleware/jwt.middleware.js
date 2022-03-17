const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.json({ auth: false });

    jwt.verify(token, process.env.SECRET, (err) => {
        if (err) {
            return res.json({ error: err, auth: false });
        }else{
            return res.json({error: false, auth: true});
        }
    })
    next();
}

module.exports = verifyJWT;