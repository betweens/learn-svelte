<script lang="ts">
	import { onMount } from "svelte";
	import FingerprintJS from '@fingerprintjs/fingerprintjs'
	import { beforeNavigate, afterNavigate, onNavigate } from '$app/navigation';
 

	// import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	// onMount(async () => {
	//  	const fpPromise = FingerprintJS.load()
	// 	const fp = await fpPromise
	// 	const result = await fp.get()
	// 	console.log(result.visitorId)
	// })

	const { children } = $props();



	let dirty = false;

  afterNavigate((navigation) => {
    console.log('从', navigation.from?.url.pathname, '导航到', navigation.to?.url.pathname);
  });

 
  // onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;
  //   return document.startViewTransition(() => {}).finished;
  // });


</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<button type="button" onclick={() => history.back()}>back</button>
<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/about">about</a></li>
	<li><a href="/settings">settings</a></li>
	<li><a href="/add">add</a></li>
	<li><a href="/user">user</a></li>
	<li><a href="/item/1/embed">embed</a></li>
	<li><a href="/blog">blog</a></li>
	<li><a href="/form">form</a></li>
</ul>
{@render children()}
