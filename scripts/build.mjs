import * as esbuild from 'esbuild'
import esbuildPluginLicense from 'esbuild-plugin-license'

const CORE_LICENSE = `MIT License

Copyright (c) 2024 Igor Matsiyevskui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

await esbuild.build({
  bundle: true,
  entryPoints: ['index.ts'],
  external: ['locales/*'],
  outfile: 'outfile.cjs',
  format: 'cjs',
  platform: 'node',
  target: 'node14',

  plugins: [
    {
      name: 'alias',
      setup({ onResolve, resolve }) {
        onResolve({ filter: /^prompts$/, namespace: 'file' }, async ({ importer, resolveDir }) => {
          // we can always use non-transpiled code since we support 14.16.0+
          const result = await resolve('prompts/lib/index.js', {
            importer,
            resolveDir,
            kind: 'import-statement'
          })
          return result
        })
      }
    },
    esbuildPluginLicense({
      thirdParty: {
        includePrivate: false,
        output: {
          file: 'LICENSE',
          template() {
            const licenseText =
              `# create-control.ts core license\n\n` +
              `create-control.ts is released under the MIT license:\n\n` +
              CORE_LICENSE +
              `\n\n`
            return licenseText
          }
        }
      }
    })
  ]
})
