export declare const todoRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        prisma: {
            User: import(".prisma/client").Prisma.UserDelegate<import("@prisma/client/runtime/library").DefaultArgs>;
            Todo: import(".prisma/client").Prisma.TodoDelegate<import("@prisma/client/runtime/library").DefaultArgs>;
        };
        userId?: string | undefined;
    };
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, {
    createTodo: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
            ctx: {
                prisma: {
                    User: import(".prisma/client").Prisma.UserDelegate<import("@prisma/client/runtime/library").DefaultArgs>;
                    Todo: import(".prisma/client").Prisma.TodoDelegate<import("@prisma/client/runtime/library").DefaultArgs>;
                };
                userId?: string | undefined;
            };
            meta: object;
            errorShape: import("@trpc/server").DefaultErrorShape;
            transformer: import("@trpc/server").DefaultDataTransformer;
        }>;
        _meta: object;
        _ctx_out: {
            prisma: {
                User: import(".prisma/client").Prisma.UserDelegate<import("@prisma/client/runtime/library").DefaultArgs>;
                Todo: import(".prisma/client").Prisma.TodoDelegate<import("@prisma/client/runtime/library").DefaultArgs>;
            };
            userId?: string | undefined;
        };
        _input_in: {
            status: boolean;
            title: string;
            description?: string | undefined;
        };
        _input_out: {
            status: boolean;
            title: string;
            description?: string | undefined;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
}>;
