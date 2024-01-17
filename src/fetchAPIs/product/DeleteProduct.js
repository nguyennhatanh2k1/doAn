import * as constants from "../../constant"
export default function DeleteProduct(data) {
    console.log("🚀 ~ DeleteProduct ~ data:", data)
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/product/delete/${data.id}`
        fetch(url, {
            method: constants.DELETE,
            headers: constants.HTTP_HEADER_JSON,
            // body: JSON.stringify(data)
        })
            .then((response) => {
                console.log("🚀 ~ .then ~ response:", response)
                return resolve(response)
            })
            .catch((error) => reject(error));
    });
}