// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/guides/example': '/drivers/',
		'/reference/example': '/drivers/help/',
	},
	integrations: [
		starlight({
			title: {
				'zh-CN': 'Crystal 用户手册',
				en: 'Crystal User Manual',
				th: 'คู่มือผู้ใช้ Crystal',
				vi: 'Hướng dẫn sử dụng Crystal',
			},
			favicon: '/favicon.ico',
			defaultLocale: 'root',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
				en: { label: 'English', lang: 'en' },
				th: { label: 'ไทย', lang: 'th' },
				vi: { label: 'Tiếng Việt', lang: 'vi' },
			},
			sidebar: [
				{ slug: 'index' },
				{
					label: '司机手册',
					translations: {
						en: 'Driver manual',
						th: 'คู่มือคนขับ',
						vi: 'Hướng dẫn dành cho tài xế',
					},
					items: [
						{ slug: 'drivers' },
						{ slug: 'drivers/installation' },
						{ slug: 'drivers/account' },
						{ slug: 'drivers/tasks' },
						{ slug: 'drivers/tracking' },
						{ slug: 'drivers/help' },
					],
				},
				{
					label: '调度手册',
					translations: {
						en: 'Dispatcher manual',
						th: 'คู่มือผู้จัดรถ',
						vi: 'Hướng dẫn dành cho điều phối viên',
					},
					items: [{ slug: 'dispatchers' }],
				},
			],
		}),
	],
});
