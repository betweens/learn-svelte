import { getRequestEvent } from '$app/server';

export const handle = async ({ event, resolve }) => {
  // const { locals, url } = getRequestEvent();
  // console.log(locals, url);
  return resolve(event);
};
