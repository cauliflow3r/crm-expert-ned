import {updateAccessToken} from "../services/token";
import {axiosInstance} from "../utils/api";

export const addFlat = async (data) => {
    await updateAccessToken()
    try {
        const formData = new FormData();
        formData.append('title', data.title)
        formData.append('condition', data.condition)
        formData.append('series', data.series)
        formData.append('floor', data.floor)
        formData.append('number_of_floors', data.number_of_floors)
        formData.append('rooms', data.rooms)
        formData.append('price', data.price)
        formData.append('document', data.document)
        formData.append('total_area', data.total_area)
        formData.append('district', data.district)
        formData.append('description', data.description)
        formData.append('comments', data.comments)
        formData.append('realtor', data.realtor)
        formData.append('images', data.images)

        const response = await axiosInstance.post('main/flats/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 201) {
            alert('Ok');
        }
    } catch (e) {
        console.log(e)
    }
}