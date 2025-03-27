import type { TTodo } from '$lib';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { v4 } from 'uuid';

let superSecureDB: TTodo[] = [
	{
		completed: true,
		createdAt: 1742464159025,
		id: '1',
		text: 'Add a real DB'
	},
	{
		completed: false,
		createdAt: 1742464159040,
		id: '2',
		text: 'Add fetch requests'
	}
];

export const load: PageServerLoad = () => {
	console.log('loading', superSecureDB);
	return {
		todos: superSecureDB
	};
};

export const actions = {
	addTodo: async ({ request }) => {
		console.log('👉 SERVER: adding todo');
		const formData = await request.formData();
		const text = formData.get('todo');

		if (typeof text !== 'string') {
			return fail(400, { text, missing: true });
		}

		superSecureDB = [
			...superSecureDB,
			{
				completed: false,
				createdAt: Date.now(),
				id: v4(),
				text
			}
		];
	},
	deleteTodo: async ({ request }) => {
		console.log('👉 SERVER: deleting todo');
		const formData = await request.formData();
		const id = formData.get('id');
		superSecureDB = superSecureDB.filter((todo) => todo.id !== id);
	},
	toggleTodo: async ({ request }) => {
		console.log('👉 SERVER: toggling todo');
		const formData = await request.formData();
		const id = formData.get('id');
		console.log({ id });
		superSecureDB = superSecureDB.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
	}
} satisfies Actions;
