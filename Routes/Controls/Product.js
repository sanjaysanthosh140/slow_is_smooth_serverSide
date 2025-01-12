"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProd = exports.deleteProd = exports.FetchProduct = exports.newProduct = void 0;
const StoreProd_1 = require("../ControlDefin/StoreProd");
const newProduct = (req, res) => {
    try {
        (0, StoreProd_1.StroeProd)(req.body).then((data) => {
            !data ? res.status(404).json({ message: "no data added" })
                : res.status(200).json({ message: "new product added" });
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.newProduct = newProduct;
const FetchProduct = (req, res) => {
    try {
        (0, StoreProd_1.fetchProd)().then((data) => {
            if (data) {
                res.status(200).json({ data });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.FetchProduct = FetchProduct;
const deleteProd = (req, res) => {
    try {
        console.log(req.params.id);
        const id = req.params.id;
        (0, StoreProd_1.deleteOne)(id).then((data) => {
            if (data) {
                console.log('ret', data);
                res.status(200).json({ message: "deleted" });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteProd = deleteProd;
const updateProd = (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        console.log(id, data);
        (0, StoreProd_1.UpdataItems)(id, data).then((data) => {
            console.log("after resolve", data);
            res.status(200).json(data);
            if (!data) {
                res.status(404).json({ message: "not updated" });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateProd = updateProd;
