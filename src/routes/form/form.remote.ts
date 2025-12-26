import * as  v from 'valibot';
import { error, redirect } from '@sveltejs/kit';
import { form } from '$app/server';

export const createPost = form(
	v.object({
		title: v.pipe(v.string(), v.nonEmpty()),
		content: v.pipe(v.string(), v.nonEmpty())
	}),
	async ({ title, content }) => {
    console.log(title, content);
		// error(401, 'Unauthorized')
    // 检查用户是否登录
		return {
      title,
      content
    }
	}
);
