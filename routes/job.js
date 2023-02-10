const router = require("express").Router();
const Verify = require("../utilities/verify-jwt");
const Controller = require("../components/job/controller");


router.get("", Verify, async (req, res, next) => {
    try {
        await new Controller().list(req, res);
    } catch (e) {
        next(e);
    }
});

router.get("/:id", Verify, async (req, res, next) => {
    try {
        await new Controller().get(req, res);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
