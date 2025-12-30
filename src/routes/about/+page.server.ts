import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, depends }) => {
  // ❌ 这个 fetch 不会自动成为依赖
  const res = await fetch('/api/counter');
  const data = await res.json();

  // ✅ 显式声明依赖（关键）
  depends('app:counter');

  console.log('server load rerun');

  return {
    serverCount: data.count
  };
};
