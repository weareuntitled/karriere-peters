import type { APIRoute } from 'astro';
import { stellen } from '../../data';

export const GET: APIRoute = async () => {
  const jobs = stellen.map((job) => ({
    ...job,
    url: `https://karriere.peters-erp.com/stellen/${job.slug}/`,
  }));
  return new Response(JSON.stringify(jobs), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
