const axios = require('axios').default;

module.exports = () => {
    const data = axios.get("localhost:3001/api/v1/comments")
        .then(response => {
            response.json();
        });

    return data;
};