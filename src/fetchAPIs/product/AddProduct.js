import * as constants from "../../constant"
export default function AddProduct(data) {
    console.log(data,"data ở fetchhhh");
    // let dataAdd = data
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/product/create`
        fetch(url, {
            method: constants.POST,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(data)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
