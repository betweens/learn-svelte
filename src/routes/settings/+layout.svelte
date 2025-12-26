<script lang="ts">
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

<ul class="ml-20">
	<p>二级菜单</p>
	{#each data.sections as section}
		<li><a href="/settings/{section.slug}">{section.title}</a></li>
	{/each}
</ul>

{@render children()}