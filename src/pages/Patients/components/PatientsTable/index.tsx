import { useState } from 'react';

import { PatientPaginated } from '~/shared/types/entity';
import Alert from '~/components/Alert';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    ButtonGroup,
    Button,
    useToast,
} from "@chakra-ui/react";

import { MdDelete, MdEdit } from "react-icons/md";

import { Date } from '~/utils';

import { Row } from './styles';

interface PatientTableProps {
    data: PatientPaginated | undefined;
}

export default function PatientsTable({ data }: PatientTableProps) {

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [patientToDelete, setPatientToDelete] = useState(0);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const toast = useToast();

    function onCloseDeleteAlert() {
        setShowDeleteAlert(false);
    }

    function onDeleteSuccess() {
        toast({
            title: 'Paciente deletado com sucesso !',
            description: '',
            duration: 5000,
            isClosable: true,
            status: 'success',
        })
    }

    function onDeleteError() {
        toast({
            title: 'Erro ao deletar paciente !',
            description: 'Tente novamente',
            duration: 5000,
            isClosable: true,
            status: 'error',
        })
    }

    function onDeleteAlert() {
        setDeleteLoading(true)
        setTimeout(() => {
            setDeleteLoading(false);
            setShowDeleteAlert(false);
            onDeleteError();
        }, 2000);
    }

    function handleDeleteClick(id: number) {
        setPatientToDelete(id);
        setShowDeleteAlert(true);
    }

    function renderRow(id: number, name: string, examsCount: number, age: number) {
        return (
            <Row>
                <Td>{name}</Td>
                <Td isNumeric>{examsCount}</Td>
                <Td isNumeric>{age} anos</Td>
                <Td isNumeric>
                    <ButtonGroup>
                        <Button 
                            colorScheme="telegram"
                            leftIcon={<MdEdit size={20}/>}
                        >
                            Editar
                        </Button>
                        
                        <Button
                            colorScheme="red"
                            leftIcon={<MdDelete size={20}/>}
                            onClick={() => handleDeleteClick(id)}
                        >
                            Deletar
                        </Button>
                    </ButtonGroup>
                </Td>
            </Row>
        )
    }

    return (
        <div>
            <Alert 
                isOpen={showDeleteAlert}
                onClose={onCloseDeleteAlert}
                onDelete={onDeleteAlert}
                isLoading={deleteLoading}
                cancelButtonText="Cancelar"
                confirmButtonText="Deletar"
                title="Remover paciente"
                description="Deseja remover esse paciente ? Essa ação não pode ser revertida"
                loadingConfirmButtonText="Removendo"
            >
            </Alert>
            <Table 
                variant="simple"
                colorScheme="telegram"
                
            >
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th isNumeric>Exames</Th>
                        <Th isNumeric>Idade</Th>
                        <Th isNumeric>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data?.data.map(item => renderRow(item.id, item.name, 0, Date.getAgeFromBirthdate(item.birthdate)))
                    }
                </Tbody>
            </Table>
        </div>
    )
}
