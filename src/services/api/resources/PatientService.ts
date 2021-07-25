import client from '../client';
import {NewPatientDto} from '~/shared/dto/Patient/new-patient.dto';

const newPatient = ({
    name,
    birthdate,
    gender,
    height,
    medication,
    weight
}: NewPatientDto) => {
    return client({
        url: '/patient',
        method: 'POST',
        data: {
            name,
            birthdate,
            gender,
            height,
            medication,
            weight,
        },
    });
}

export default {
    newPatient,
}