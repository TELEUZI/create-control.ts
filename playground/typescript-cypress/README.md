# typescript-cypress

This template should help get you started developing with Control.ts in Vite.

## Recommended IDE Setup

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

  ### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

  ```sh
  pnpm test:unit:dev # or `pnpm test:unit` for headless testing
  ```
  
  ### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

  ```sh
  pnpm test:e2e:dev
  ```

  This runs the end-to-end tests against the Vite development server.
  It is much faster than the production build.

  But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

  ```sh
  pnpm build
  pnpm test:e2e
  ```
  