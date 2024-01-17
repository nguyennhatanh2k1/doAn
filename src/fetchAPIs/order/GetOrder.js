import * as constants from "../../constant"
export default function GetOrder(data) {
    // let dataAdd = data
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/order/get`
        fetch(url, {
            method: constants.GET,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(data)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
