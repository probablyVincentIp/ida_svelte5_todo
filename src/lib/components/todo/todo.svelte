<script>
	import { todoStore } from '$lib/store/todoStore.svelte';

	export let todo;
</script>

<li
	class="mx-3 my-2 flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 shadow-sm"
>
	<input
		name="completed"
		type="checkbox"
		checked={todo.completed}
		on:change={() => todoStore.toggleTodo(todo.id)}
		class="form-checkbox mr-2 h-5 w-5"
	/>
	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
	{#if todo.completed}
		<button
			type="button"
			class="focus:shadow-outline rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600 focus:outline-none"
			on:click={() => todoStore.deleteTodo(todo.id)}>Delete</button
		>
	{/if}
</li>
