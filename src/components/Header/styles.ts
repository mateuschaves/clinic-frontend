import styled from 'styled-components';
import {colors} from '~/theme';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const Greeting = styled.h4`
    color: ${colors.primary};
    font-size: 35px;
    font-weight: bold;
`;

export const Avatar = styled.img`
    width: 148px;
    height: 148px;
    border-radius: 90px;
`;