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
    color: ${colors.primary};
    font-size: 21px;
    margin-bottom: 30px;
`;