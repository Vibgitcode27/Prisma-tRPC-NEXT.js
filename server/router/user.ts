import { publicProcedure , router} from "../trpc";
import { z } from "zod"

export const userRouter = router({
    signUp: publicProcedure
        .input(z.object({
            username: z.string(),
            password: z.string()
        }))
        .mutation( async (opts) =>
        {
            let username = opts.input.username
            let password = opts.input.password
        })

})