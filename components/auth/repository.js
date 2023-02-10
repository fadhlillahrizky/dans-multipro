const db = require("../../config/db");
const { QueryTypes } = require('sequelize');

module.exports = class service {
    constructor(option) {
        this.db = option?.db || db;
    }

    async findUser(username, password ) {
        return this.db.query(`
        SELECT * FROM users WHERE username='${username}' AND password='${password}' LIMIT 1
        `,
            { type: QueryTypes.SELECT });
    }
}
