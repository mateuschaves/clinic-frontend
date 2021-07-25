import styled from 'styled-components';
import { colors } from '~/theme';
import { Button } from '@chakra-ui/react';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
`;

export const Label = styled.h1`
    font-size: 24px;
    color: ${colors.primary};
    text-align: center;
    font-weight: 500;
    margin-top: 20px;
`;

export const AddButton = styled(Button)`
    margin-top: 30px;
`;