import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { PrismaClient } from '@prisma/client';
import { router } from './trpc';
import { userRouter } from './router/user';
import { todoRouter } from './router/todo';

const appRouter = router({
    user: userRouter,
    todo: todoRouter
});

// This is to use in createContext

    const prismaDummy = new PrismaClient();
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
    router: appRouter, 
    createContext(opts) {
        return {
            prisma : {
                User : prismaDummy.user ,
                Todo : prismaDummy.todo
            } ,
            userId : ""
        }       
        
        // You have to verify the user here
    }
  });
