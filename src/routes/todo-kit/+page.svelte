<script lang="ts">
	import { KitTodo, KitTodoForm } from '$lib';
	import { fade, fly } from 'svelte/transition';

	let { data } = $props();
	console.log(data);
</script>

<main>
	<h1 class="text-center text-2xl font-bold text-gray-800 md:text-3xl">Server Side Todo App</h1>

	<!-- todo input form -->
	<KitTodoForm />
	<!-- todo list -->

	{#each data.todos as todo (todo.id)}
		<div transition:fly>
			<KitTodo {todo} />
		</div>
	{/each}
</main>
