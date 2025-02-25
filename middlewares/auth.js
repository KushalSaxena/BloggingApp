const { validateToken } = require("../services/auth");

function checkForAuthenticationCookie(cookieName){
    return (req, res, next) => {
        const cookie = req.cookies[cookieName];
        if(!cookie){
            return next();
        }

        try{
            const userPayload = validateToken(cookie);
            req.user = userPayload
        }catch(error){}
        return next();
    }
}

module.exports = {checkForAuthenticationCookie};