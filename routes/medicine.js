const router = require("express").Router();
const Medicine = require("../models/medicine");


//create 

router.post("/", async (req, res) => {
    try {
        const newMedicine = new Medicine(req.body);
        const saveMedicine = await newMedicine.save();
        res.status(201).json(saveMedicine)
    } catch (error) {
        res.status(500).json(error)

    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateMedicine = await Medicine.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(201).json(updateMedicine)
    } catch (error) {

        res.status(500).json(error)
    }

})

router.delete("/:id", async (req, res) => {
    try {
        await Medicine.findByIdAndDelete(req.params.id);
        res.status(200).json("User post has been deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
})

// router.get("/:id", async (req, res) => {
//     try {
//       const data = await Medicine.findById(req.params.id);
//       const { password, ...others } = data._doc;
//       res.status(200).json(others);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.get("/", async (req, res) => {
    try {
        const data = await Medicine.find().sort({updatedAt: -1});
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)

    }
})

module.exports = router;