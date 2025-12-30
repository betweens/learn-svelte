<script lang="ts">
	import { page } from '$app/state';

	import type { RouteParams } from './$types';
	const { children } = $props();


	console.log(page);
</script>

<h3>id {page.params.id}</h3>
{@render children()}