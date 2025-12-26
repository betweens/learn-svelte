import { query } from '$app/server';
import * as v from 'valibot';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const getPosts = query(
	v.string(),
  async (slug) => {
    await sleep(2000); // 暂停 2 秒
		const posts = await Promise.resolve(`dsasdfghkhjkjh-${slug}`);
		return posts;
	}
)