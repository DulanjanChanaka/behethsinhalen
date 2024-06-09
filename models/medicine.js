const mongoose = require("mongoose");



const MedicineScheama = new mongoose.Schema(
    {
        drugname: { type: String },
        group: { type: String },
        description1: { type: String },
        description2: { type: String },
        description3: { type: String },
        description4: { type: String },
        dosage1: { type: String },
        dosage2: { type: String },
        dosage3: { type: String },
        dosage4: { type: String },
        dosage5: { type: String },
        image1: { type: String },
        image2: { type: String },
        image3: { type: String },
        image4: { type: String },
        brand1: { type: String },
        brand2: { type: String },
        brand3: { type: String },
        brand4: { type: String },
        brand5: { type: String },
        brand6: { type: String },
        brand7: { type: String },
        brand8: { type: String },
        brand9: { type: String },
        brand10: { type: String },
        
    },
    { timestamps: true }
)



module.exports = mongoose.model("medicine", MedicineScheama)