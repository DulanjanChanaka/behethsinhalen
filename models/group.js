const mongoose = require("mongoose");



const GroupScheama = new mongoose.Schema(
    {
        groupname: { type: String },
        group: { type: String },
        description1: { type: String },
        description2: { type: String },
        description3: { type: String },
        description4: { type: String },
        image1: { type: String },
        example1:{ type: String },
        example2:{ type: String },
        example3:{ type: String },
        example4:{ type: String },
        example5:{ type: String },
  
        
    },
    { timestamps: true }
)



module.exports = mongoose.model("group", GroupScheama)