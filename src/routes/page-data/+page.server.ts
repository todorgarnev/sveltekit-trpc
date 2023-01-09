import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => ({
	greeting: router.createCaller(await createContext(event)).greeting({ name: "todor" }),
	posts: router.createCaller(await createContext(event)).add({ name: "new name", age: 55 })
});
