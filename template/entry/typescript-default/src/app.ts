import { div$, mount } from '@control.ts/min'
import { header } from './components/header'
import { mainFile } from './components/main'

const pageElements = [header, mainFile]

const page = div$(
  {
    className: 'page-wrapper'
  },
  ...pageElements
)

const app = document.getElementById('app')
mount(app!, page)
