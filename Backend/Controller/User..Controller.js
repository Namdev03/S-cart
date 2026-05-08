const usermodel = require('../Model/User.Model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const cookieOptions = {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 15 * 60 * 1000, // 15 minutes
};

async function registerUser(req, res) {
    try {
        const payload = req.body;
        const isExist = await usermodel.findOne({ email: payload.email })
        if (isExist) {
            return res.status(409).json({ message: "user already registerd" })
        }
        const hashpaswword = await bcrypt.hash(payload.password, 10)
        const toSend = {
            ...payload,
            password: hashpaswword,
        }
        const register = await usermodel.create(toSend)
        res.status(201).json({ message: `successfully registerd ${payload.name}`, data: toSend })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function loginUser(req, res) {
    try {
        const payload = req.body;
        const isExist = await usermodel.findOne({ email: payload.email })
        if (!isExist) {
            return res.status(404).json({ message: "user not registerd" })
        }
        const verifypassword = await bcrypt.compare(payload.password, isExist.password)
        if (!verifypassword) {
            return res.status(401).json({ message: "invailid credential" })
        }
        const toSend = {
            id: isExist._id,
            name: isExist.name,
            email: isExist.email,
            role: isExist.role,
            profilepic:isExist.profilepic
        }
        const generatejwt = jwt.sign(toSend, process.env.SECRATE_KEY, {
            expiresIn: 2 * 60 * 60 * 1000
        })
        res.cookie("token", generatejwt, cookieOptions)
        res.status(200).json({ message: `Wellcome back ${toSend.name}`, data:toSend, })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
async function logoutUser(req, res) {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(404).json({ message: "token not found" })
        }
        res.clearCookie(token);
        return res.status(200).json({
            message: "Logged out successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
async function verifyuser(req, res) {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: "invalid token" })
        }
        const decode = jwt.verify(token, process.env.SECRATE_KEY)
        if (!decode) {
            return res.status(401).json({ message: "unauthrized invalid token" })
        }
        return res.status(200).json({
            message: "User verified",
            user: decode,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { registerUser, loginUser, logoutUser,verifyuser }