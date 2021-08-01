interface CallbackProps {
    (): void;
}

export interface RemovePatientDto {
    id: number;
    successCallback?: CallbackProps;
    errorCallback?: CallbackProps;
}