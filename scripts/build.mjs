import * as esbuild from 'esbuild'
import esbuildPluginLicense from 'esbuild-plugin-license'

const CORE_LICENSE = ``

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
          template(allDependencies) {
            // There's a bug in the plugin that it also includes the `create-control.ts` package itself
            const dependencies = allDependencies.filter(
              (d) => d.packageJson.name !== 'create-control.ts'
            )
            const licenseText =
              `# create-control.ts core license\n\n` +
              `create-control.ts is released under the MIT license:\n\n` +
              CORE_LICENSE +
              `\n## Licenses of bundled dependencies\n\n` +
              `The published create-control.ts artifact additionally contains code with the following licenses:\n` +
              [...new Set(dependencies.map((dependency) => dependency.packageJson.license))].join(
                ', '
              ) +
              '\n\n' +
              `## Bundled dependencies\n\n` +
              dependencies
                .map((dependency) => {
                  return (
                    `## ${dependency.packageJson.name}\n\n` +
                    `License: ${dependency.packageJson.license}\n` +
                    `By: ${dependency.packageJson.author.name}\n` +
                    `Repository: ${dependency.packageJson.repository.url}\n\n` +
                    dependency.licenseText
                      .split('\n')
                      .map((line) => (line ? `> ${line}` : '>'))
                      .join('\n')
                  )
                })
                .join('\n\n')

            return licenseText
          }
        }
      }
    })
  ]
})
