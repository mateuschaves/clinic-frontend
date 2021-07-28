export interface User {
    accessToken: string;
}

export interface Patient {
    name: string;
    gender: string;
    birthdate: Date;
    medication: string;
    drug: string;
    weight: number;
    height: number;
}

export interface PatientPaginated {
    data: Patient[];
    count: number;
    currentPage: number;
    nextPage: number;
    prevPage: number;
    lastPage: number;
}