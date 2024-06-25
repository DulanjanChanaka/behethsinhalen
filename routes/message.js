const router = require("express").Router();
const Message = require("../models/message");


//create 

router.post("/", async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        const saveMessage = await newMessage.save();
        res.status(201).json(saveMessage)
    } catch (error) {
        res.status(500).json(error)

    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateMessage = await Message.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(201).json(updateMessage)
    } catch (error) {

        res.status(500).json(error)
    }

})

router.delete("/:id", async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
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
        const data = await Message.find().sort({updatedAt: -1});
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)

    }
})

module.exports = router;