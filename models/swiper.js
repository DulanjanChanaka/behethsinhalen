const mongoose = require("mongoose");



const SwiperScheama = new mongoose.Schema(
    {
        drugname: { type: String },
        group: { type: String },
        description1: { type: String },
        description2: { type: String },
        description3: { type: String },
        description4: { type: String },
        image1: { type: String },
        image2: { type: String },
        image3: { type: String },
        image4: { type: String },
        
        
    },
    { timestamps: true }
)



module.exports = mongoose.model("swiper", SwiperScheama)