import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { UrlRouter } from '../../../backend/src/routers/urlRouter';
const trpcClient = createTRPCProxyClient<UrlRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000/trpc'
        }),
    ]
});

export default trpcClient;