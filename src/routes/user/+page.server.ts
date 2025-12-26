import type { Actions } from './$types';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		// const password = data.get('password');

		// const user = await db.getUser(email);
		cookies.set('sessionid', email, { path: '/' });

		return { success: true };
	}
} satisfies Actions;