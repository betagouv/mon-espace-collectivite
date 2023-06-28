import { createTRPCReact } from '@trpc/react-query';
import 'client-only';

import type { AppRouter } from '@app/web/server/rpc/appRouter';

export const trpc = createTRPCReact<AppRouter>();
