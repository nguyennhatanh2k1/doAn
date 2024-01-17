import * as constants from "../../constant"
export default function UpdateProduct(data) {
    console.log(data,"data ở fetchhhh");
    let dataUpdate = data
    // let dataUpdate = {
    //     id: data.id,
    //     name: data.productName,
    //     description: data.productDescription

    // }
    // console.log(dataUpdate,"dataUpdate ở fetchhhh");

    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/product/update-new/${data.id}`
        fetch(url, {
            method: constants.PUT,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(dataUpdate)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
