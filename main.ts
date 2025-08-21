/** Prints "hello" */
export function hello() {
  console.log("hello");
}
if (import.meta.main) {
  hello();
  Deno.serve(() => new Response("hello"));
}
