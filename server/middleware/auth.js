import jwt from 'jsonwebtoken';

function auth(req, res, next) {
    try {
        const data = jwt.verify(req.cookies.token, "secret");

        req.user = data;
        console.log(req.cookies.token)
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
}

export default auth;