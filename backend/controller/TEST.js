const Model = require("../model/TEST");

exports.Ajout=async (req,res)=>{
    const { name } = req.body;
    const result= await Model.AjoutModel(name);
    return res.status(200).json({message:"valid",result});
};

exports.Get=async (req,res)=>{
    const { id } = req.params;
    const result= await Model.GetModel(id);
    return res.status(200).json({message:"valid",result});
};