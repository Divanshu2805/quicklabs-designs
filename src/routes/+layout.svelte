<script>
	import { onMount } from 'svelte';
	import '../app.css';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	onMount(() => {
		// Reinitialize Flowbite components if necessary
		if (window.Flowbite) {
			window.Flowbite.init();
		}
	});
</script>

{@render children?.()}
