import { div$, mount } from '@control.ts/min'
import { header } from './components/header'
import { main } from './components/main'

const pageElements = [header, main]

const page = div$(
  {
    className: 'page-wrapper'
  },
  ...pageElements
)

const app = document.getElementById('app')
mount(app, page)
