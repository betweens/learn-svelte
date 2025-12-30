<script lang="ts">
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();

</script>

<p>三级菜单</p>
<h1>settings</h1>
<p>{data.content}</p>