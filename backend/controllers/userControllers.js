const User = require("../model/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async(req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({ message: "fill in all fields" });

    try {
        const duplicate = await User.findOne({ email });
        if (duplicate)
            return res.status(409).json({ message: "email is already registered" });
        const hashedPwd = await bcrypt.hash(password, 8);
        const user = await User.create({ name, email, password: hashedPwd });
        const token = getToken({ name: user.name, email: user.email });
        res.json({ user: { name, email, _id: user._id }, token });
    } catch (err) {
        res.status(500).json(err);
    }
};

const getToken = (user) => {
    return jwt.sign({...user }, process.env.ACCESS_SECRET, { expiresIn: '1d' })
}
const getUser = async(req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ message: "fill in all fields" });
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(403).json({ message: "wrong credentials" });

        const comparePwd = await bcrypt.compare(password, user.password)
        if (!comparePwd)
            return res
                .status(403)
                .json({ message: "wrong credentials" });

        const token = getToken({ name: user.name, email: user.email });
        res.json({ user: { name: user.name, email, _id: user._id }, token });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { getUser, registerUser };