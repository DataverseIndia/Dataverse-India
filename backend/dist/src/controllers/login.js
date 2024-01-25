import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { admins, db, getUserByEmail } from "../config/schema.js";
import { eq } from "drizzle-orm";
export const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await getUserByEmail(email);
    const admin = result[0];
    if (!result) {
        return res.status(401).json({ message: 'Admins only' });
    }
    const passwordCheck = await new Promise((resolve, reject) => {
        bcrypt.compare(password, admin.password, async (error, result) => {
            if (error)
                reject(error);
            else
                resolve(result);
        });
    });
    if (passwordCheck === true) {
        const loginToken = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: "30d" });
        await db.update(admins).set({ last_login: new Date() }).where(eq(admins.email, email));
        res.json({ message: "Logged in successfully", token: loginToken });
    }
    else {
        res.json({ message: "Incorrect Password", token: null });
    }
};
//# sourceMappingURL=login.js.map