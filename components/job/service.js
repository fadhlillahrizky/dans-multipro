const GenericResponseEntity = require("../../utilities/entities");
const Repository = require("./repository");

module.exports = class service {
    constructor(option) {
        this.repository = option?.repository || new Repository();
    }

    async list(query) {
        const response = new GenericResponseEntity();
        try {
            const jobs = (await this.repository.list(query));

            response.message = "success";
            response.success = true;
            response.data = jobs.data;
            return response;
        } catch (e) {
            response.statusCode = 500;
            response.message = "Error Server";
            response.errors = e;
            return response;
        }

    }

    async get(id) {
        const response = new GenericResponseEntity();

        try {
            const job = (await this.repository.get(id));

            response.message = "success";
            response.success = true;
            response.data = job.data;
            return response;
        } catch (e) {
            response.statusCode = 500;
            response.message = "Error Server";
            response.errors = e;
            return response;
        }
    }
}
