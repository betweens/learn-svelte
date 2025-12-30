<script lang="ts">
  import { createPost } from './form.remote';
</script>
<h1>form</h1>

<form {...createPost}>
  <input name="title" />
  <textarea name="content"></textarea>
  <button type="submit">submit</button>
</form>

{#if createPost.result}
  <p>{createPost.result.content}---{createPost.result.title}</p>
{/if}