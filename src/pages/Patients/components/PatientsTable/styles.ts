import styled from 'styled-components';
import { colors } from '~/theme';
import { darken } from 'polished';

import {
    Tr,
} from "@chakra-ui/react";

export const Row = styled(Tr)`
    &:hover {
        background-color: ${darken(0.05, colors.white)};
        cursor: pointer;
    }
`;