<script lang="ts">
	import { page } from "$app/stores";
	import { trpc } from "$lib/trpc/client";

	let greeting = "press the button to load data";
	let loading = false;

	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).greeting.query({ name: "gosho" });
		loading = false;
	};
</script>

<h4>Loading data in<br /><code>+page.svelte</code></h4>

<button on:click={loadData}> Load </button>
<p>{greeting}</p>
