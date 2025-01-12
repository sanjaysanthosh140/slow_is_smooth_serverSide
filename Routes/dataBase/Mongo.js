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
const mongoose = require("mongoose");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose.connect("mongodb+srv://sanjaykrishna038:mO1fxSmpmRsMFxbC@cluster0.aztv7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/prodWeb").then((data) => {
            !data
                ? console.log("connection fail")
                : console.log("connection successfull");
        });
    }
    catch (error) {
        console.log(error);
    }
});
connectDB();
