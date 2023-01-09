import { initTRPC } from "@trpc/server";
import { z } from "zod";
import delay from "delay";
import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();

const posts = [
	{ name: "gosho", age: 5 },
	{ name: "pesho", age: 10 }
];

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
		}),
	add: t.procedure
		.input(
			z.object({
				name: z.string(),
				age: z.number()
			})
		)
		.mutation(({ input }) => {
			posts.push(input);
			return posts;
		})
});

export type Router = typeof router;
