const GenericResponseEntity = require("../../utilities/entities");
const jwt = require("jsonwebtoken");
const Repository = require("./repository");
const jwtSecret = process.env.SECRET ?? "secretkey";

module.exports = class service {
    constructor(option) {
        this.repository = option?.repository || new Repository();
    }

    async login(body) {
        const response = new GenericResponseEntity();
        const { username, password } = body;

        const user = (await this.repository.findUser(username, password)).pop();
        if (!user) {
            response.statusCode = 400;
            response.message = "Invalid username or password";
            return response;
        }

        const token = jwt.sign({ id: user.id }, jwtSecret);

        response.message = "success";
        response.success = true;
        response.data = {
            token,
        };
        return response;
    }
}
