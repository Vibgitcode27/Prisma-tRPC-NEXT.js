"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewares = exports.publicProcedure = exports.router = void 0;
const server_1 = require("@trpc/server");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
// Add prisma in context to faciliate easy testing
const t = server_1.initTRPC.context().create();
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
exports.router = t.router;
exports.publicProcedure = t.procedure;
exports.middlewares = t.middleware;
