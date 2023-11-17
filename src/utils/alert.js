import {toast} from "react-toastify";
import AlertComponent from "../components/AlertComponent";

const showSuccess = (title, msg, options) => {
    toast.success(<AlertComponent title={title} msg={msg}/>, options)
}

const showError = (title, msg, options) => {
    toast.error(<AlertComponent title={title} msg={msg}/>, options)
}

export {
    showError,
    showSuccess
}