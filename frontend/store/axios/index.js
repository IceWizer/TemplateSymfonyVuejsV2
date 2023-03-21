import axios from "axios";

const apiRequest = (url, method = 'GET', onSuccess = () => {}, data = null) => {
    url = 'api/' + url;

    if (!['GET', 'POST', 'PUT', 'DELETE'].includes(method)) {
        method = 'GET';
    }

    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            data
        })
            .then((response) => {
                onSuccess && onSuccess(response);
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export {
    apiRequest
};
