export declare const isLoggedIn: import("@trpc/server").MiddlewareBuilder<{
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
    _ctx_out: {};
    _input_out: typeof import("@trpc/server").unsetMarker;
    _input_in: unknown;
    _output_in: unknown;
    _output_out: unknown;
    _meta: object;
}, {
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
    _ctx_out: {
        user: {
            id: number;
            username: string;
            password: string;
        } | null;
    };
    _input_in: unknown;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: unknown;
    _output_out: unknown;
    _meta: object;
}>;
