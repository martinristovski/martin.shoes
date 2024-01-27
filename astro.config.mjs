import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'WeltedWiki.com',
			// logo: '../src/assets/logo.svg',
			social: {
				discord: 'https://www.stitchdown.com/join-stitchdown-premium/',
			},
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				{
					label: 'Introduction',
					autogenerated: { directory: 'introduction' },
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Brannock',
							link: '/introduction/brannock/',
						},
					],
				},
				{
					label: 'Makers',
					autogenerate: { directory: 'makers' },
				},
				{
					label: 'Places',
					autogenerate: { directory: 'places' },
				},
			],
		}),
	],
});
