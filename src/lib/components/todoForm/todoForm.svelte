<script lang="ts">
	import { todoStore } from '$lib/store/todoStore.svelte';
	let todo = '';

	const handleSubmit = () => {
		if (todo === '') {
			todo = '';
			return alert('Please enter a todo as required!');
		}
		todoStore.addTodo(todo);
		todo = '';
	};
</script>

<form class="mx-3 my-6" on:submit|preventDefault={handleSubmit}>
	<div class="mb-2 flex flex-col text-sm">
		<label for="todo" class="mb-2 font-bold text-gray-800">Todo:</label>
		<input
			type="text"
			name="todo"
			bind:value={todo}
			placeholder="What's on your mind?"
			class="appearance-none rounded-lg border border-gray-200 p-2 shadow-sm focus:border-gray-500 focus:outline-none"
		/>
	</div>
	<button
		type="submit"
		class="w-full rounded bg-blue-500 px-4 py-2 text-white shadow-sm hover:bg-blue-600">Add</button
	>
</form>
