import * as constants from "../../constant"
export default function LoginApi(data) {
    let dataAdd = data
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/account/login`
        fetch(url, {
            method: constants.POST,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(dataAdd)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
