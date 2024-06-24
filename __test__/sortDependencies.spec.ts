import { it, describe, expect } from 'vitest'
import sortDependencies from '../utils/sortDependencies'

describe('sortDependencies', () => {
  it('should sort dependencies and dev dependencies', () => {
    const packageJson = {
      dependencies: {
        pinia: '^2.1.7'
      },
      devDependencies: {
        'start-server-and-test': '^2.0.1',
        vite: '^4.4.11',
        '@vue/test-utils': '^2.4.1',
        cypress: '^13.3.1',
        eslint: '^8.49.0',
        '@vitejs/plugin-vue': '^4.4.0',
        'eslint-plugin-cypress': '^2.15.1',
        'eslint-plugin-vue': '^9.17.0',
        vitest: '^0.34.6'
      }
    }
    expect(sortDependencies(packageJson)).toStrictEqual({
      dependencies: {
        pinia: '^2.1.7',
      },
      devDependencies: {
        '@vitejs/plugin-vue': '^4.4.0',
        '@vue/test-utils': '^2.4.1',
        cypress: '^13.3.1',
        eslint: '^8.49.0',
        'eslint-plugin-cypress': '^2.15.1',
        'eslint-plugin-vue': '^9.17.0',
        jsdom: '^22.1.0',
        'start-server-and-test': '^2.0.1',
        vite: '^4.4.11',
        vitest: '^0.34.6'
      }
    })
  })
})
