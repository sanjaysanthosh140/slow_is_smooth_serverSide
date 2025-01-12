"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdataItems = exports.deleteOne = exports.fetchProd = exports.StroeProd = void 0;
const mongoose_1 = require("mongoose");
const product_1 = require("../Models/product");
const StroeProd = (data) => __awaiter(void 0, void 0, void 0, function* () {
    new Promise((resolve, reject) => {
        const { name, description, image } = data;
        console.log(name, description, image);
        const productItems = new product_1.Product({
            name,
            description,
            image,
        });
        //
        productItems.save().then((data) => {
            console.log(data);
            data ? resolve(data) : console.log("error");
        });
    });
});
exports.StroeProd = StroeProd;
const fetchProd = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield product_1.Product.aggregate([{
                $project: {
                    _id: 1,
                    name: 1,
                    description: 1,
                    image: 1,
                },
            }]);
        resolve(data);
        console.log(data);
    }));
});
exports.fetchProd = fetchProd;
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (id) {
            yield product_1.Product.deleteOne({ _id: new mongoose_1.Types.ObjectId(id) }).then((data) => {
                resolve(data);
            });
        }
    }));
});
exports.deleteOne = deleteOne;
const UpdataItems = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("updateMfun", data);
        const updatedDta = yield product_1.Product.findOneAndUpdate({ _id: new mongoose_1.Types.ObjectId(id) }, {
            $set: {
                name: data.name,
                description: data.description,
                image: data.image
            },
        }, { new: true });
        console.log("updated", updatedDta);
        if (updatedDta) {
            resolve(updatedDta);
        }
    }));
});
exports.UpdataItems = UpdataItems;
