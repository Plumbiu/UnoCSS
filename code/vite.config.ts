import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss({
    presets: [presetUno(), presetAttributify()],
    transformers: [transformerDirectives()]
  })],
})
