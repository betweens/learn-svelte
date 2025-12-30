<script lang="ts">
  import { invalidate, invalidateAll } from '$app/navigation';
  import type { PageProps } from "./$types";
  import VisitorData from '../../components/visitor-data.svelte';
  const { data }: PageProps = $props();

  let num = $state('');
  
  async function andomNumber() {
    const response = await fetch('/api/andom-number?min=1&max=10', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    num = await response.text();
  }
</script>
<h1>about page</h1>
<button type="button" onclick={andomNumber}>{num}1</button>
<VisitorData />


<button onclick={() => invalidate('/api/counter')}>
  invalidate('/api/counter')
</button>

<button onclick={() => invalidate('app:counter')}>
  invalidate('app:counter')
</button>

<button onclick={() => invalidateAll()}>
  invalidateAll()
</button>

<h2>Client load count: {data.clientCount}</h2>
<h2>Server load count: {data.serverCount}</h2>