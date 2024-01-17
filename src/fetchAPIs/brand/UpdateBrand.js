import * as constants from "../../constant"
export default function UpdateBrand(data) {
    console.log(data,"data ở fetchhhh");
    // let dataAdd = data
    let dataUpdate = {
        id: data.id,
        name: data.name,
        description: data.description

    }
    console.log(dataUpdate,"dataUpdate ở fetchhhh");

    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/brand/update/${data.id}`
        fetch(url, {
            method: constants.PUT,
            headers: constants.HTTP_HEADER_JSON,
            body: JSON.stringify(dataUpdate)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
