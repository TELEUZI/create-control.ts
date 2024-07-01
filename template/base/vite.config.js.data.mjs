export default function getData() {
  return {
    plugins: [
      {
        id: 'control.ts',
        importer: "import vue from '@vitejs/plugin-vue'",
        initializer: 'vue()'
      }
    ]
  }
}
