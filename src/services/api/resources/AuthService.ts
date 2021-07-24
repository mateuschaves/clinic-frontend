import client from '../client';
import {SigninDto} from '~/shared/dto/Auth/signin.dto';

const sigIn = (data: SigninDto) => {
    return client({
        url: '/auth/signin',
        method: 'POST',
        data: {
            email: data.email,
            password: data.password,
        },
    });
}

export default {
    sigIn,
}