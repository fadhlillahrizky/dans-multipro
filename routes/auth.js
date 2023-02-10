const router = require("express").Router();
const Controller = require("../components/auth/controller");


router.post("/login", async (req, res, next) => {
    try {
        await new Controller().login(req, res);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
