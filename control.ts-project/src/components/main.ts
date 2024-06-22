import { h1$, main$ } from '@control.ts/min'

export const main = main$(
  {
    className: 'main'
  },
  h1$({ className: 'title', innerText: 'Hello Control.ts' })
)
