import { Request, Response } from "express";

import { deleteOne, fetchProd, StroeProd, UpdataItems } from "../ControlDefin/StoreProd";
export const newProduct = (req: Request, res: Response) => {
   try {
    StroeProd(req.body).then((data:any)=>{
         !data?res.status(404).json({message:"no data added"})
         :res.status(200).json({message:"new product added"})
    })
   } catch (error) {
     console.log(error)
   }
};

export const FetchProduct = (req:Request,res:Response)=>{
  try {
    fetchProd().then((data:any)=>{
      if(data){
      res.status(200).json({data})
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export  const deleteProd = (req:Request,res:Response)=>{
  try {
    console.log(req.params.id)
    const id = req.params.id
    deleteOne(id).then((data:any)=>{
      if(data){
        
        console.log('ret',data)
        res.status(200).json({message:"deleted"})
      }
    })
  } catch (error) {
    console.log(error)
  }
}


export const updateProd = (req:Request,res:Response) =>{
  try {
    const id =req.params.id
    const data = req.body
    console.log(id,data)
    UpdataItems(id,data).then((data:any)=>{
      console.log("after resolve",data)
      res.status(200).json(data)
         if(!data){
          res.status(404).json({message:"not updated"})
         }
    })
  } catch (error) {
    console.log(error)
  }
}