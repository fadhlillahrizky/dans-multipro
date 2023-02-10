const { httpResponse } = require("../../utilities/response");
const Service = require("./service");

module.exports = class controller {
    constructor(option) {
        this.service = option?.service || new Service();
    }

    async list(req, res) {
        httpResponse(await this.service.list(req.query), res);
    }

    async get(req, res) {
        httpResponse(await this.service.get(req.params.id), res);
    }
}
