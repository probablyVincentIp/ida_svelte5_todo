import type { TTodo } from '$lib';
import { v4 } from 'uuid';
function createTodoStore() {
	let todos: TTodo[] = $state([]);

	return {
		get todos() {
			console.log('Client todos');
			return todos;
		},
		addTodo: (text: string) => {
			console.log('Client adding todo');
			todos = [...todos, { id: v4(), text, completed: false, createdAt: Date.now() }];
		},
		deleteTodo: (id: string) => {
			todos = todos.filter((todo) => todo.id !== id);
		},
		toggleTodo: (id: string) => {
			todos = todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
		}
	};
}

export const todoStore = createTodoStore();
