import { useState } from 'react';

import { push } from 'connected-react-router';

import Header from '~/components/Header';
import EmptyAnimation from '~/components/EmptyAnimation';

import {useDispatch} from 'react-redux';

import { Container } from './styles';

export default function Home() {
    const [exams, setExams] = useState([])

    const dispatch = useDispatch();

    function isExamsEmpty() {
        return exams.length === 0;
    }

    function handleAddExamClick() {
        dispatch(push('/new-patient'));
    }

    return (
        <Container>
            <Header />
            {   isExamsEmpty() && 
                <EmptyAnimation
                    showAddButton
                    onPress={handleAddExamClick}
                />}
            
        </Container>
    )
}
