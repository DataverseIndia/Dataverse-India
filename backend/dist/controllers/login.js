"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const schema_1 = require("../config/schema");
const drizzle_orm_1 = require("drizzle-orm");
const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await (0, schema_1.getUserByEmail)(email);
    if (result[0] === undefined) {
        return res.status(401).json({ message: 'Admins only', token: null });
    }
    else {
        const admin = result[0];
        const passwordCheck = await new Promise((resolve, reject) => {
            bcrypt_1.default.compare(password, admin.password, async (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            });
        });
        if (passwordCheck === true) {
            const loginToken = jsonwebtoken_1.default.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: "30d" });
            await schema_1.db.update(schema_1.admins).set({ last_login: new Date() }).where((0, drizzle_orm_1.eq)(schema_1.admins.email, email));
            res.json({ message: "Logged in successfully", token: loginToken });
        }
        else {
            res.json({ message: "Incorrect Password", token: null });
        }
    }
};
exports.login = login;
//# sourceMappingURL=login.js.map