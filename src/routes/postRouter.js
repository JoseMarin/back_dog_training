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
        const postId = req.body.postId;
        res.json(await postControllers.removePost(postId))
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

//El administrador podrá ver todos los posts
router.get("/",  async(req, res) => {
    try {
        res.json(await postControllers.findAllPost());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

//Para traer los posts de un usuario por id
router.post("/userpost",  async(req, res) => {
    try {
        const userId = req.body.userId;
        res.json(await postControllers.findPostByUserId(userId));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;