<script lang="ts">
	import { enhance } from '$app/forms';
	import type { TTodo } from '$lib';

	type TodoProps = { todo: TTodo };
	let { todo }: TodoProps = $props();

	function handleChange(e: Event) {
		const target = e.target as HTMLInputElement; // Cast target to HTMLInputElement
		if (target) {
			(target.parentNode as HTMLFormElement)?.submit();
		}
	}
</script>

<li
	class="mx-3 my-2 flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 shadow-sm"
>
	<form method="POST" action="/todo-kit?/toggleTodo" use:enhance>
		<input type="hidden" name="id" value={todo.id} />
		<input
			name="completed"
			type="checkbox"
			checked={todo.completed}
			onchange={handleChange}
			class="form-checkbox mr-2 h-5 w-5"
		/>
	</form>
	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
	{#if todo.completed}
		<form method="POST" action="/todo-kit?/deleteTodo" use:enhance>
			<input type="hidden" name="id" value={todo.id} />
			<input
				value="Delete"
				type="submit"
				class="focus:shadow-outline rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600 focus:outline-none"
			/>
		</form>
	{/if}
</li>
