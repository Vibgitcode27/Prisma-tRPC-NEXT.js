import { router } from './trpc';
import { userRouter } from './router/user';
import { todoRouter } from './router/todo';

const appRouter = router({
    user: userRouter,
    todo: todoRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;