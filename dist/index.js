"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@trpc/server/adapters/standalone");
const client_1 = require("@prisma/client");
const trpc_1 = require("./trpc");
const user_1 = require("./router/user");
const todo_1 = require("./router/todo");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // Import types for jwt
const appRouter = (0, trpc_1.router)({
    user: user_1.userRouter,
    todo: todo_1.todoRouter
});
// This is to use in createContext
const prismaDummy = new client_1.PrismaClient();
const server = (0, standalone_1.createHTTPServer)({
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
        if (authHeader) {
            const token = authHeader.split(" ")[1];
            console.log(token);
            return new Promise((resolve) => {
                jsonwebtoken_1.default.verify(token, "SECRET", (err, data) => {
                    if (data) {
                        resolve({ userId: data, prisma: { User: prismaDummy.user, Todo: prismaDummy.todo } });
                    }
                    else {
                        resolve({ prisma: { User: prismaDummy.user, Todo: prismaDummy.todo } });
                    }
                });
            });
        }
        else {
            return {
                prisma: { User: prismaDummy.user, Todo: prismaDummy.todo }
            };
        }
    }
});
server.listen(3000);
