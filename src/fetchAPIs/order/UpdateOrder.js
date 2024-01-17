import * as constants from "../../constant"
export default function UpdateOrder(data) {
    console.log(data,"data ở fetchhhh");
    // let dataAdd = data
    let dataUpdate = {
        id: data.id,
        name: data.orderName,
        description: data.productDescription

    }
    // console.log(dataUpdate,"dataUpdate ở fetchhhh");

    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/order/update/${data.id}`
        fetch(url, {
            method: constants.PUT,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(dataUpdate)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
