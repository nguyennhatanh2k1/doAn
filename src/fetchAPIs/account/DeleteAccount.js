import * as constants from "../../constant"
export default function DeleteBrand(data) {
    // console.log(data,"data ở fetchhhh");
    // let dataAdd = data
    return new Promise((resolve, reject) => {
        const url = constants.DOMAIN + `/brand/delete/${data.id}`
        fetch(url, {
            method: constants.DELETE,
            headers: constants.HTTP_HEADER_JSON,
            // body: JSON.stringify(data)
        })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}