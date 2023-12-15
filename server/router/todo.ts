import { publicProcedure, router } from "../trpc";
import { z } from "zod"

export const todoRouter = router({
    createTodo : publicProcedure
    .input(z.object
      ({
        title: z.string(),
        description: z.string().optional(),
        status: z.boolean() 
      }))
      .mutation( async (opts) =>
      {
        let title = opts.input.title;
        let description = opts.input.description;
        let status = opts.input.status;
      })
})