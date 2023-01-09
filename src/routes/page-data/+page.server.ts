import { createContext } from "$lib/trpc/context";
import { router } from "$lib/trpc/router";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => ({
	greeting: router.createCaller(await createContext(event)).greeting({ msg: "todor" })
});
