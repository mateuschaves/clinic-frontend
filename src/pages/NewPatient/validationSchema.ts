import * as Yup from 'yup';

const NewPatientSchema = Yup.object().shape({
        name: Yup.string().trim().required('Digite o nome !'),
        gender: Yup.string().required('Informe o sexo !').oneOf(['male', 'female']),
        birthdate: Yup.date().required('Informe a data de nascimento !'),
        medication: Yup.string().required('Informe as medicações !'),
        height: Yup.number().required('Informe a altura !'),
        weight: Yup.number().required('Informe o peso !')
    });

export default NewPatientSchema;