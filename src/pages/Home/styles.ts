import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: ${colors.white};
    height: 100vh;
`;
