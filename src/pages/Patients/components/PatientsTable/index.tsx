import React from 'react';
import { PatientPaginated } from '~/shared/types/entity';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"


interface PatientTableProps {
    data: PatientPaginated | undefined;
}

export default function PatientsTable({ data }: PatientTableProps) {

    function renderRow(name: string, examsCount: number, age: number) {
        return (
            <Tr>
                <Td>{name}</Td>
                <Td isNumeric>{examsCount}</Td>
                <Td isNumeric>{age}</Td>
            </Tr>
        )
    }

    return (
        <div>
            <Table 
                variant="simple"
                colorScheme="telegram"
                
            >
                <TableCaption>Pacientes cadastrados</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th isNumeric>Exames</Th>
                        <Th isNumeric>Idade</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data?.data.map(item => renderRow(item.name, 0, 20))
                    }
                </Tbody>
            </Table>
        </div>
    )
}
