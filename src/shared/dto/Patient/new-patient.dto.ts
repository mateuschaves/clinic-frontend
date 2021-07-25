interface CallbackProps {
    (): void;
}

export interface NewPatientDto {
    name: string;
    gender: string;
    height: number;
    weight: number;
    medication: string;
    birthdate: Date;
    successCallback?: CallbackProps;
    errorCallback?: CallbackProps
}