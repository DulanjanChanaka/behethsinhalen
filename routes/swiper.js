const router = require("express").Router();
const Swiper = require("../models/swiper");


//create 

router.post("/", async (req, res) => {
    try {
        const newSwiper = new Swiper(req.body);
        const saveSwiper = await newSwiper.save();
        res.status(201).json(saveSwiper)
    } catch (error) {
        res.status(500).json(error)

    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateSwiper = await Swiper.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(201).json(updateSwiper)
    } catch (error) {

        res.status(500).json(error)
    }

})

router.delete("/:id", async (req, res) => {
    try {
        await Swiper.findByIdAndDelete(req.params.id);
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
        const data = await Swiper.find().sort({updatedAt: -1});
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)

    }
})

module.exports = router;