const Transaction = require("../model/Transaction");
const User = require("../model/User");

const makeTransaction = async(req, res) => {
    const { transaction } = req.body;
    try {
        const user = await User.findOne({ email: req.email });
        if (!user) res.status(400).json({ message: "Invalid request" });
        const newTransaction = await Transaction.create({
            user: user._id,
            cost: transaction.cost,
            products: [...transaction.products],
        });

        res.json(newTransaction);
    } catch (error) {
        res.json(error);
    }
};
const getTransactions = async(req, res) => {
    const email = req.email;
    if (!email) return res.sendStatus(401);

    try {
        const user = await User.findOne({ email });
        if (!user) return res.sendStatus(400);
        const transactions = await Transaction.find({ user: user._id });
        res.json(transactions);
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    makeTransaction,
    getTransactions,
};