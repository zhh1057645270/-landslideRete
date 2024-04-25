import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import externalGlobals from 'rollup-plugin-external-globals';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';
import { resolve } from 'path';
const postCssPxToRem = require('postcss-pxtorem');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	return {
		plugins: [
			vue(),
			ElementPlus(),
			Components({
				resolvers: [
					ElementPlusResolver({
						importStyle: 'sass',
					}),
				],
			}),
			createSvgIconsPlugin({
				// 指定需要缓存的图标文件夹
				iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
				// 指定symbolId格式
				symbolId: 'icon-[dir]-[name]',
			}),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				cesium: fileURLToPath(new URL('./public/Cesium/Cesium.js', import.meta.url)),
			},
		},
		optimizeDeps: {
			include: ['cesium'],
		},
		css: {
			postcss: {
				plugins: [
					postCssPxToRem({
						rootValue: 100, // 1rem的大小
						propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
					}),
				],
			},
		},
		build: {
			rollupOptions: {
				external: ['cesium'],
				plugins: [
					externalGlobals({
						Cesium: 'cesium',
					}),
				],
			},
			terserOptions: {
				compress: {
					drop_debugger: true,
					drop_console: true,
				},
			},
		},
	};
});
