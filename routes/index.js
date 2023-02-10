const router = require("express").Router();

const auth = require("./auth");
const job = require("./job");

router.get("/", function (req, res) {
    res.send("Hi, is there anything I can help you with?");
});


router.use("/auth", auth);
router.use("/job", job);

module.exports = router;
