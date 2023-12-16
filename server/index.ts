import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { PrismaClient } from '@prisma/client';
import { router } from './trpc';
import { userRouter } from './router/user';
import { todoRouter } from './router/todo';
import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken'; // Import types for jwt

const appRouter = router({
    user: userRouter,
    todo: todoRouter
});

// This is to use in createContext

    const prismaDummy = new PrismaClient();
// Export type router type signature,
// NOT the router itself.

type VerifyCallback = (err: VerifyErrors | null, data: JwtPayload | undefined) => void;


export type AppRouter = typeof appRouter;

const server = createHTTPServer({
    router: appRouter, 
    createContext(opts) {

        // You have to verify the user here
        let authHeader = opts.req.headers["authorization"];  

// IMPORTANT STUFF 
        // let a = Jwt.verify(token , SECRET , (err , data) =>
        // {
        //     return data.userId;
        // })

// Important thing to see here is that what Jwt.verify() returns will be stored here and not what actually is being returned.

// To fetch return from a call you have to use Promises

// It is called promisifying the callback function

// We are doing all this beacause Jwt doesn't support something like this "const userId = await Jwt.verify(token , SECRET)"

        if(authHeader)
        {
            const token = authHeader.split(" ")[1]
            console.log(token)
            
            return new Promise<{prisma: {User : typeof prismaDummy.user , Todo : typeof prismaDummy.todo } , userId?: string}>((resolve) => {
                jwt.verify(token, "SECRET", (err, data) => {
                    if (data) {
                        resolve({ userId: data as string, prisma: { User: prismaDummy.user, Todo: prismaDummy.todo } });
                    } else {
                        resolve({ prisma: { User: prismaDummy.user, Todo: prismaDummy.todo } });
                    }
                }); 
            })                
        }
        else
        {
            return {
                prisma: { User: prismaDummy.user, Todo: prismaDummy.todo }
            } 
        }
    }
});

server.listen(3000);