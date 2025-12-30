<script lang="ts">
  import { enhance } from '$app/forms'
  import type { PageProps } from "./$types";
	let { data, form }: PageProps = $props();

</script>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
	       response to a form submission. it will vanish if the user reloads -->
	<p>Successfully logged in! Welcome back</p>
{/if}

<form method="POST" use:enhance>
	<label>
		Email
		<input name="email" type="email">
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<button>Log in</button>
</form>