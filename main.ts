/** Prints "hello" */
export function hello() {
  console.log("hello");
}

declare const Deno: { unrefTimer(id: number): void, serve(cb: () => void): void };

if (import.meta.main) {
  hello();
  Deno.serve(() => new Response("hello"));
}
