import { publicProcedure , router} from "../trpc";
import { z } from "zod"
import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';

export const userRouter = router({
    signUp: publicProcedure
        .input(z.object({
            username: z.string(),
            password: z.string()
        }))
        .mutation( async (opts) =>
        {
            let username = opts.input.username;
            let password = opts.input.password;
            await opts.ctx.prisma.User.create({
                data: {
                    username,
                    password
                }
            })
            let response = await opts.ctx.prisma.User.findUnique({
                where: {
                    username : username
                }
            })
            let userId = response?.id
            let payload = {
                userId : userId
            }
            jwt.sign(payload , "SECRET", {expiresIn : "1h"})
        })

})