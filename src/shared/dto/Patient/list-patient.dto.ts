interface CallbackProps {
    (): void;
}

export interface ListPatientDto {
    take?: number;
    page?: number;
    successCallback?: CallbackProps;
    errorCallback?: CallbackProps
}