<script lang="ts">
	import { enhance } from '$app/forms';

	let todo = '';
</script>

<form class="mx-3 my-6" method="POST" action="/todo-kit?/addTodo" use:enhance>
	<div class="mb-2 flex flex-col text-sm">
		<label for="todo" class="mb-2 font-bold text-gray-800">Todo:</label>
		<input
			type="text"
			name="todo"
			placeholder="What's on your mind?"
			class="appearance-none rounded-lg border border-gray-200 p-2 shadow-sm focus:border-gray-500 focus:outline-none"
		/>
	</div>
	<button
		type="submit"
		class="w-full rounded bg-blue-500 px-4 py-2 text-white shadow-sm hover:bg-blue-600">Add</button
	>
</form>
