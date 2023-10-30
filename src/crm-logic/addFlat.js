import {updateAccessToken} from "../services/token";

export const addFlat = async () => {
    await updateAccessToken()
}