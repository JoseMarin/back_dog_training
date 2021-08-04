const router = require("express").Router();
const postControllers = require("../controllers/postControllers");
const authenticate = require("../middleware/authenticate");
const admin = require("../middleware/admin");

router.post("/", async(req, res) => {
    try {
        const id = await postControllers.makePost(req.body);
        const status = "success";
        res.json({ status, id });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/deletepost", authenticate, async(req, res) => {
    try {
        const data = req.body;
        res.json(await postControllers.removePost(data))
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", admin, async(req, res) => {
    try {
        res.json(await postControllers.findAllPost());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/userid",  async(req, res) => {
    try {
        const id = req.body.id;
        res.json(await postControllers.findPostByUserId(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;