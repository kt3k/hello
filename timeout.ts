Deno.serve(() => new Promise((resolve) => setTimeout(() => {
  return new Response("slow response");
}, 60 * 60 * 1000)));
