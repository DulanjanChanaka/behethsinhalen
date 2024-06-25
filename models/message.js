const mongoose = require("mongoose");



const MessageScheama = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        pno: { type: String },
        message: { type: String },
        
        
        
    },
    { timestamps: true }
)



module.exports = mongoose.model("message", MessageScheama)