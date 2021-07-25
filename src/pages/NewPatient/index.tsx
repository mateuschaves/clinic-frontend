import { Formik, Field, Form, FormikProps } from 'formik';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    HStack,
    VStack,
    Select,
    useToast,
} from "@chakra-ui/react"

import Header from '~/components/Header';

import validationSchema from './validationSchema';

import {newPatientActions} from '~/store/ducks/Patient/NewPatient';
import {useDispatch, useSelector} from 'react-redux';

import { Container, Title } from './styles';
import { RootState, InitialNewPatientStateProps } from '../../shared/store/app.state';

interface ValuesProps {
    name: string;
    gender: string;
    birthdate?: Date;
    medication: string;
    drug: string;
    weight?: number;
    height?: number;
}

const initialValues: ValuesProps = {
    name: '',
    gender: '',
    birthdate: undefined,
    medication: '',
    drug: '',
    weight: undefined,
    height: undefined,
}

export default function NewPatient() {

    const toast = useToast();
    const dispatch = useDispatch();
    const {loading} = useSelector<RootState, InitialNewPatientStateProps>(state => state.newPatient);

    function renderDrugInput(props: FormikProps<ValuesProps> ) {
        const { medication } = props.values;

        if (medication === 'in_use' || medication === 'suspend' ) {
            return <Field name="drug">
                        {({ field, form }: any) => (
                        <FormControl isInvalid={form.errors.drug}>
                            <FormLabel htmlFor="drug">Remédio</FormLabel>
                            <Input {...field} id="drug" placeholder="Paracetamol" size="md"/>
                            <FormErrorMessage>{form.errors.drug}</FormErrorMessage>
                        </FormControl>
                        )}
                </Field>
        }
    }

    function successCallback() {
        toast({
            title: 'Paciente adicionado !',
            description: 'Vamos cadastar o exame dele',
            duration: 9000,
            isClosable: true,
            status: 'success',
        })
    }

    function errorCallback() {
        toast({
            title: 'Erro ao adicionar paciente !',
            description: 'Tente novamente',
            duration: 9000,
            isClosable: true,
            status: 'error',
        })
    }

    return (
        <Container>
            <Header />

            <Title>Novo exame</Title>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    dispatch(newPatientActions.newPatient({
                        ...values,
                        successCallback,
                        errorCallback,
                    }))
                }}
                validationSchema={validationSchema}
                validateOnBlur={false}
            >
                {(props: FormikProps<ValuesProps>) => (
                    <Form>
                        <VStack spacing={8} align="stretch">
                            <HStack spacing="80px"> 
                                <Field name="name">
                                    {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.name}>
                                        <FormLabel htmlFor="name">Nome</FormLabel>
                                        <Input {...field} id="name" placeholder="Ex. João" size="md"/>
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>

                                <Field name="gender">
                                    {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.gender}>
                                        <FormLabel htmlFor="gender">Sexo</FormLabel>
                                        <Select {...field} placeholder="Selecione uma opção" id="gender" size="md">
                                            <option value="male">Masculino</option>
                                            <option value="female">Feminino</option>
                                        </Select>
                                        <FormErrorMessage>{form.errors.gender}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                            </HStack>
                            <HStack spacing="80px"> 
                                <Field name="birthdate">
                                    {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.birthdate}>
                                        <FormLabel htmlFor="birthdate">Data de nascimento</FormLabel>
                                        <Input {...field} id="birthdate" placeholder="21/10/1998" type="date" size="md"/>
                                        <FormErrorMessage>{form.errors.birthdate}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>

                                <Field name="medication">
                                    {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.medication}>
                                        <FormLabel htmlFor="medication">Medicações</FormLabel>
                                        <Select {...field} placeholder="Selecione uma opção" id="medication" size="md">
                                            <option value="none">Nenhuma</option>
                                            <option value="in_use">Em uso</option>
                                            <option value="suspend">Suspendeu</option>
                                        </Select>
                                        <FormErrorMessage>{form.errors.medication}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                            </HStack>
                            {
                                renderDrugInput(props)
                            }
                            <HStack spacing="80px"> 
                                <Field name="weight">
                                    {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.weight}>
                                        <FormLabel htmlFor="weight">Peso</FormLabel>
                                        <Input {...field} id="weight" placeholder="53.3" size="md"/>
                                        <FormErrorMessage>{form.errors.weight}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>

                                <Field name="height">
                                    {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.height}>
                                        <FormLabel htmlFor="height">Altura</FormLabel>
                                        <Input {...field} id="height" placeholder="1.62" size="md"/>
                                        <FormErrorMessage>{form.errors.height}</FormErrorMessage>
                                    </FormControl>
                                    )}
                                </Field>
                            </HStack>
                            
                            <HStack alignSelf="flex-end">
                                <Button
                                    colorScheme="telegram"
                                    isLoading={loading}
                                    type="submit"
                                    size="md"
                                >
                                    Próximo
                                </Button>
                            </HStack>
                        </VStack>
                        
                    </Form>
                )}
                </Formik>
        </Container>
    )
}
