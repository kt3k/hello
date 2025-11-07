
export interface HelloOptions {
  /**
   * An optional greeting message
   * @default "hello"
   */
  message?: string;

  /**
   * An optional second message
   *
   * @default {"world"}
   */
  message2?: string;
}

/** Prints "hello" */
export function hello(options?: HelloOptions): void {
  console.log(options?.message ?? "hello");
  setTimeout(() => {
    console.log(options?.message2 ?? "world");
  }, 1000);
}

declare const Deno: { unrefTimer(id: number): void, serve(cb: () => void): void };

if (import.meta.main) {
  hello();
  Deno.serve(() => new Response("hello"));
}
