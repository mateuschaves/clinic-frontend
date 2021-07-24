import {
    AxiosError
} from 'axios';

export default function ErrorHandler(error: AxiosError, handleError: boolean) {
    if (error.response) {
        switch (error.response.status) {
            case 400:
                break;
            case 401:
                break;
            case 422:
            default:
                break;
        }
    } 
    return Promise.reject(error);
};
