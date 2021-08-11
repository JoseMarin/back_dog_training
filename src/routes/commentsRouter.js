const router = require("express").Router();
const commentsControllers = require("../controllers/commentsControllers");
const authenticate = require("../middleware/authenticate");
const admin = require("../middleware/admin");

router.post("/", async(req, res) => {
    try {
        const id = await commentsControllers.makeComment(req.body);
        const status = "success";
        res.json({ status, id });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/deletecomment", authenticate, async(req, res) => {
    try {
        const data = req.body;
        res.json(await commentsControllers.removeComment(data))
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

//El administrador podrá ver todos los posts
router.get("/",  async(req, res) => {
    try {
        res.json(await commentsControllers.findAllComments());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;