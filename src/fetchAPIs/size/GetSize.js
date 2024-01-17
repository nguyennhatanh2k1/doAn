import * as constants from "../../constant"
export default function GetSize(data) {
    // let dataAdd = data
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/size/get`
        fetch(url, {
            method: constants.GET,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(data)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
