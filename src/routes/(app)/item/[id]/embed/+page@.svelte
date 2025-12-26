<script lang="ts">
 
	import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
  // 直接调用，就像普通函数一样！
 
 
</script>

<h4>embed {data.path}</h4>