<script lang="ts">
	import { TodoForm, Todo } from '$lib';
	import { todoStore } from '$lib/store/todoStore.svelte';
</script>

<main>
	<h1 class="text-center text-2xl font-bold text-gray-800 md:text-3xl">Clientside Todo App</h1>

	<!-- todo input form -->
	<TodoForm />

	<!-- todo list -->
	{#each todoStore.todos as todo (todo.id)}
		<Todo {todo} />
	{/each}
</main>
