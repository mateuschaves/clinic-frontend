import client from '../client';
import { NewPatientDto } from '~/shared/dto/Patient/new-patient.dto';
import { ListPatientDto } from '~/shared/dto/Patient/list-patient.dto';
import { RemovePatientDto } from '~/shared/dto/Patient/remove-patient.dto';

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


const listPatient = ({
    take,
    page
}: ListPatientDto) => {
    return client({
        url: '/patient',
        method: 'GET',
        params: {
            take,
            page,
        }
    });
}


const removePatient = ({
    id
}: RemovePatientDto) => {
    return client({
        url: `/patient/${id}`,
        method: 'DELETE',
    });
}

export default {
    newPatient,
    listPatient,
    removePatient,
}