import { useEffect, useState } from 'react';

import { push } from 'connected-react-router';

import Header from '~/components/Header';
import EmptyAnimation from '~/components/EmptyAnimation';
import PatientsTable from './components/PatientsTable';

import { useDispatch, useSelector } from 'react-redux';

import { Container, Title } from './styles';
import { RootState, InitialListPatientStateProps } from '../../shared/store/app.state';
import { listPatientActions } from '~/store/ducks/Patient/ListPatient';

export default function Patients() {
    const dispatch = useDispatch();
    const { patients, loading } = useSelector<RootState, InitialListPatientStateProps>(state => state.listPatient);

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatchListPatients();
    }, []);


    function dispatchListPatients() {
        dispatch(listPatientActions.listPatient({
            page,
            take: 10,
        }));
    }

    function isPatientsEmpty() {
        return patients?.count === 0;
    }

    function handleAddPatientClick() {
        dispatch(push('/new-patient'));
    }

    function renderPatientsTable() {
        return <PatientsTable data={patients}/>
    }

    function renderEmpty() {
        return <EmptyAnimation
            showAddButton
            onPress={handleAddPatientClick}
        />
    }

    return (
        <Container>
            <Header />
            {!isPatientsEmpty() && <Title>Seus pacientes</Title>}
            {isPatientsEmpty() ? renderPatientsTable() : renderPatientsTable()}
        </Container>
    )
}
