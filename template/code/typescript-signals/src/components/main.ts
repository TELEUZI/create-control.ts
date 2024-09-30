import { h1$, main$ } from '@control.ts/signals'

export const mainFile = main$(
  {
    className: 'main'
  },
  h1$({ className: 'title', txt: 'Hello Control.ts' })
)
