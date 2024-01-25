"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAuthorized = async (req, res, next) => {
    try {
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer') || !req.headers.authorization.split(' ')[1]) {
            return res.status(422).json({
                message: "Please provide token"
            });
        }
        next();
    }
    catch (error) {
        res.status(409).send({
            msg: error
        });
    }
};
exports.default = isAuthorized;
//# sourceMappingURL=auth.js.map