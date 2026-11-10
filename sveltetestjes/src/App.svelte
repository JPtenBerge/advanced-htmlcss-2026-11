<script>
	import './app.css';
	import svelteLogo from './assets/svelte.svg';
	import viteLogo from './assets/vite.svg';

	let tellertje = $state(0);

	const increment = () => tellertje++;
</script>

<header class="flex items-center mb-3 p-3">
	<img src={svelteLogo} alt="Svelte Logo" />
	<img src={viteLogo} alt="Vite Logo" />
	Svelte en Vite ftw!
</header>

<main class="border-t-2 border-black border-dashed p-3">
	Tellertje: <output>{tellertje}</output>

	<button class="border-2 border-black p-3 hover:cursor-pointer" onclick={increment}>Increment</button>
	<button class="border-2 border-black p-3 disabled:bg-red-300 hover:cursor-not-allowed" onclick={increment} disabled
		>Disabled increment</button
	>
</main>
