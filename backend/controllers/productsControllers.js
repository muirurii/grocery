const Product = require("../model/Product");


const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.sendStatus(500);
    }
};

const getProduct = async(req, res) => {
    const params = req.params;
    try {
        const product = await Product.findOne({ _id: params.product });
        const related = await Product.find({ category: product.category }).limit(5);
        res.json({ product, related: related.filter(p => p.name !== product.name) });

    } catch (err) {
        res.sendStatus(500);
    }
};

const getCategory = async(req, res) => {
    const params = req.params;
    try {
        const products = await Product.find({ category: params.category });
        res.json({ products });
    } catch (err) {
        res.sendStatus(500);
    }
};

const getFeaturedProducts = async(req, res) => {
    try {
        const products = await Product.find({ featured: true });
        res.json(products);
    } catch (err) {
        res.sendStatus(500);
    }
};

module.exports = { getAllProducts, getFeaturedProducts, getCategory, getProduct };