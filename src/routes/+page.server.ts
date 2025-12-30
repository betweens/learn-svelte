import { SECRET_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
    post: SECRET_API_KEY
  };
};