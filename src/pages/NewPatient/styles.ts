import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: ${colors.white};
    height: 100vh;
    padding: 50px;
`;


export const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
    color: ${colors.primary};
    margin-top: 25px;
    margin-bottom: 25px;
`;