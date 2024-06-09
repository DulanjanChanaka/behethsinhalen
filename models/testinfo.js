const mongoose = require("mongoose");



const TestInfoScheama = new mongoose.Schema(
    {
        testname: { type: String },
        group: { type: String },
        description1: { type: String },
        description2: { type: String },
        description3: { type: String },
        description4: { type: String },
  
        
    },
    { timestamps: true }
)



module.exports = mongoose.model("testinfo", TestInfoScheama)