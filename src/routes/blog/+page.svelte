<script lang="ts">
  import { getPosts } from './data.remote';
  
  const cities = Array.from({ length: 10 }, (_, i) => i + 1);;

  let limit = $state(5);

</script>
<h1>blog</h1>





{#each cities.slice(0, limit) as city}
	<h3>{city}</h3>
  {#await getPosts(city.toString())}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then value}
	<!-- promise was fulfilled or not a Promise -->
	<p>The value is {value}</p>
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}

{/each}
{#if cities.length > limit}
	<button onclick={() => limit += 5}>
		加载更多
	</button>
{/if}