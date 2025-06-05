import { createServerFn } from '@tanstack/react-start';
import { auth } from '~/utils/auth';
import { AuthContext } from 'better-auth/types';

export const getAuth = createServerFn<
    'GET',
    'data',
    undefined,
    undefined,
    Promise<{ context: AuthContext } | undefined>
>({
    method: 'GET',
}).handler(async () => {
    const { $context } = auth;

    const { session } = await $context;

    return {
        context: session,
    };
});
