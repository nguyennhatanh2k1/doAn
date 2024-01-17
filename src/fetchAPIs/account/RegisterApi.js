import * as constants from "../../constant"
export default function RegisterApi(data) {
    let dataAdd = data
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/account/register`
        fetch(url, {
            method: constants.POST,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(dataAdd)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
