const router = require("express").Router();
const Article = require("../models/artical");


//create 

router.post("/", async (req, res) => {
    try {
        const newArticle = new Article(req.body);
        const saveArticle = await newArticle.save();
        res.status(201).json(saveArticle)
    } catch (error) {
        res.status(500).json(error)

    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateArticle = await Article.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(201).json(updateArticle)
    } catch (error) {

        res.status(500).json(error)
    }

})

router.delete("/:id", async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.params.id);
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
        const data = await Article.find().sort({updatedAt: -1});
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)

    }
})

module.exports = router;