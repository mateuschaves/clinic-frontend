interface CallbackProps {
    (): void;
}

export interface SigninDto {
    email: string;
    password: string;
    successCallback?: CallbackProps;
    errorCallback?: CallbackProps
}