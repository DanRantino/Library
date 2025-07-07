import { authClient } from '~/utils/auth';

export function useSession() {
  const data = authClient.useSession();

  return data;
}
