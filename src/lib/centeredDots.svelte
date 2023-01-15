<script lang='ts'>
	export let id: string;
	export let shiftMultiplier: number = 5;

	const shiftDots = (e: MouseEvent) => {
		const dotsDiv = document.getElementById(id) as HTMLElement;

		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;

		const panX = x * shiftMultiplier;
		const panY = y * shiftMultiplier;

		dotsDiv.style.backgroundPosition = `${panX}px ${panY}px, 7.5vmin 7.5vmin`;
	};
</script>

<div id={id} class="dots center" on:mousemove={shiftDots} >
    <slot />
</div>

<style>
    .dots {
        background-image: radial-gradient(rgba(255, 255, 255, 0.15) 8%, transparent 8%),
			radial-gradient(rgba(168, 168, 168, 0.15) 8%, transparent 8%);

		/* position second row of dots halfway diagonally to first row */
		background-position: 0 0, 7.5vmin 7.5vmin;
		background-size: 5vmin 5vmin;
    }

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
