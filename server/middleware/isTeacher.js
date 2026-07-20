// import jwt from 'jsonwebtoken';

// function isTeacher(req, res, next) {
//     if (req.user.role !== "teacher") {
//         return res.status(403).json({
//             message: "Access denied. Teachers only.",
//         });
//     }

//     next();
// }

// export default isTeacher;

import jwt from 'jsonwebtoken';
function isTeacher(req, res, next) {
    try {
        const data = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

        req.user = data;
        if(data.role !== "teacher"){
           return res.status(403).json({
            message: "Access denied. Teachers only.",
        });
        }
        console.log(data)
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
}

export default isTeacher;