import { initTRPC } from "@trpc/server";
import { z } from "zod";
import delay from "delay";
import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	greeting: t.procedure
		.input(
			z.object({
				name: z.string().optional()
			})
		)
		.query(async ({ input }) => {
			await delay(500);
			return `Hello ${input.name ?? "World"}`;
		})
});

export type Router = typeof router;
