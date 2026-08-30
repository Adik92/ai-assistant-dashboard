// Minimal API surface for the sandbox app.
export interface Route {
  method: string;
  path: string;
  handler: () => unknown;
}

export const routes: Route[] = [];
