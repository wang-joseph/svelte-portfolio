<script lang='ts'>
	import { slide } from 'svelte/transition';

	export let id: string;
	export let shiftMultiplier: number = 5;
	export let height: string = "100vh";

	const shiftDots = (e: MouseEvent) => {
		const dotsDiv = document.getElementById(id) as HTMLElement;

		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;

		const panX = x * shiftMultiplier;
		const panY = y * shiftMultiplier;

		dotsDiv.style.backgroundPosition = `${panX}px ${panY}px, 7.5vmin 7.5vmin`;
	};
</script>

<div id={id} class="dots" style={`height: ${height}`} on:mousemove={shiftDots} transition:slide|local>
    <slot />
</div>

<style>
    .dots {
        background-image: radial-gradient(rgba(255, 255, 255, 0.15) 8%, transparent 8%),
			radial-gradient(rgba(168, 168, 168, 0.15) 8%, transparent 8%);

		/* position second row of dots halfway diagonally to first row */
		background-position: 0 0, 7.5vmin 7.5vmin;
		background-size: 5vmin 5vmin;
		z-index: -2;
    }
</style>
