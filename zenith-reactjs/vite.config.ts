 

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
//   server: {
//     open: true,
//   },
// });

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssImport from 'postcss-import'

export default defineConfig({
  base: './', // 👈 Fixes white screen issue on GitHub Pages or relative deployments
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        {
          postcssPlugin: 'strip-charset',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            },
          },
        },
      ],
    },
  },
})
