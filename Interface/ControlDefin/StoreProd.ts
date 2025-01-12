import { Types } from "mongoose";
import { Product } from "../Models/product";

export const StroeProd = async (data: any) => {
  new Promise((resolve: any, reject: any): any => {
    const { name, description, image } = data;
    console.log(name, description, image);
    const productItems = new Product({
      name,
      description,
      image,
    });
    //
    productItems.save().then((data: Object) => {
      console.log(data);
      data ? resolve(data) : console.log("error");
    });
  });
};

export const fetchProd = async () => {
  return new Promise(async(resolve: any, reject: any) => {
    let data = await Product.aggregate([{
      $project: {
        _id: 1,
        name: 1,
        description: 1,
        image: 1,
      },
    }]);
    resolve(data);
    console.log(data);
  });
};

export const deleteOne = async (id:any)=>{
  return new Promise(async(resolve:any,reject:any)=>{
    if(id){
      await Product.deleteOne({_id:new Types.ObjectId(id)}).then((data:object)=>{
        resolve(data)
      })

    }
  })
}

export const UpdataItems = async (id:any,data:any)=>{
 return new Promise(async(resolve:any,reject:any)=>{
    console.log("updateMfun",data)
    const updatedDta = await Product.findOneAndUpdate({_id: new Types.ObjectId(id)},{
      $set:{
        name:data.name,
        description:data.description,
        image:data.image
      },
      

    },{ new: true })

    console.log("updated",updatedDta)
    if(updatedDta){
      resolve(updatedDta)
    }
   })
}

  

