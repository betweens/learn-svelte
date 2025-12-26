// import { browser } from '$app/environment';
// import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params, data }) => {
  return {
    title: 'Hello world!',
    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
    env: data.post
  };
};

// export const prerender = true;