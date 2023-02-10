const axios = require("axios");
const baseUrl = process.env.DANSMULTIPRO_BASE_URL ?? "http://dev3.dansmultipro.co.id/api/";

module.exports = class service {
    constructor(option) {
        this.axios = option?.axios || axios;
        this.baseUrl = option?.baseUrl || baseUrl;
    }

    async list(queryString) {
        let url = `${this.baseUrl}recruitment/positions.json`;
        if (queryString) {
            url += '?'
            const params = Object.keys(queryString)
            params.forEach((param, index) => {
                if (params.length === index) {
                    url += `${param}=${queryString[param]}`
                } else {
                    url += `${param}=${queryString[param]}&`
                }
            })
        }
        return await this.axios.get(url);
    }

    async get(id) {
        let url = `${this.baseUrl}recruitment/positions/${id}`;
        return await this.axios.get(url);
    }
}
