import { TRPCError } from "@trpc/server";
import { middlewares} from "../trpc";

export const isLoggedIn = middlewares(async (opts) => {
    const { ctx } = opts;
    if (!ctx.userId) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    let user = await ctx.prisma.User.findUnique({
        where:
        {
            username: ctx.userId
        }
    })
    return opts.next({
      ctx: {
        user
      },
    });
  });
