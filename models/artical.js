const mongoose = require("mongoose");



const ArticleScheama = new mongoose.Schema(
    {
        articlename: { type: String },
        group: { type: String },
        description1: { type: String },
        description2: { type: String },
        description3: { type: String },
        description4: { type: String },
        image1: { type: String },
        
        
    },
    { timestamps: true }
)



module.exports = mongoose.model("article", ArticleScheama)