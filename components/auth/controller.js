const { httpResponse } = require("../../utilities/response");
const Service = require("./service");

module.exports = class controller {
    constructor(option) {
        this.service = option?.service || new Service();
    }

    async login(req, res) {
        httpResponse(await this.service.login(req.body), res);
    }
}
