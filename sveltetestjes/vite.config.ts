import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), svelte(), svelteTesting()],
	test: { environment: 'jsdom', setupFiles: ['./vitest-setup.ts'] },
});
