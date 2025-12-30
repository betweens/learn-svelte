<script lang="ts">
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
</script>

<h1>Welcome to SvelteKit {data.content}</h1>
<h2>{data.env}</h2>