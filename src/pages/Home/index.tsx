import { useState } from 'react';

import Header from '~/components/Header';
import EmptyAnimation from '~/components/EmptyAnimation';

import { Container } from './styles';

export default function Home() {
    const [exams, setExams] = useState([])

    function isExamsEmpty() {
        return exams.length === 0;
    }

    function handleAddExamClick() {

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
