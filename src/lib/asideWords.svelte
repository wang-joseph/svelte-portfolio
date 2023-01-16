<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let needsToShow: boolean = false;
	export let cancelledEarly: boolean = false;
	export let showed: boolean = false;
	export let hasHovered: boolean = false;
	export let hasClicked: boolean = false;
	export let hoverPopup: NodeJS.Timer;

	onMount(() => {
		hoverPopup = setTimeout(() => {
			needsToShow = true;
			showed = true;
			cancelledEarly = false;
		}, 2000);
	});
</script>

{#if needsToShow}
	<div class="aside-container" in:fly={{ y: 50, duration: 1000 }} out:fade>
		<img class="main-word-aside-img" src="./pointing-arrow.png" alt="" />
		<span>
			<h4 class="side-note">Hover my name!</h4>
		</span>
	</div>
{:else if cancelledEarly && hasHovered && !hasClicked}
	<div class="aside-container" in:fly={{ y: 50, duration: 1000 }} out:fade>
		<img class="main-word-aside-img" src="./pointing-arrow.png" alt="" />
		<span>
			<h4 class="side-note">Hey! Try clicking!</h4>
		</span>
	</div>
{:else if showed && !hasClicked}
	<div class="aside-container" in:fade out:fade>
		<img class="main-word-aside-img" src="./pointing-arrow.png" alt="" />
		<span>
			<h4 class="side-note">Now, give me a click!</h4>
		</span>
	</div>
{/if}

<style>
	.aside-container {
		position: absolute;
		top: 0;
		right: -25%;
		width: 30%;

		/* align objects below in a row */
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.side-note {
		font-family: 'Josefin Sans Light', sans-serif;
		display: table-cell;
		vertical-align: bottom;

		font-size: 20px;

		background: linear-gradient(
			90deg,
			rgba(246, 89, 255, 1) 0%,
			rgba(0, 222, 255, 1) 0%,
			rgba(0, 84, 231, 1) 100%
		);
		background-size: 200% 200%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.main-word-aside-img {
		width: 2.5em;
		height: 2.5em;
	}

	/* media queries for phones */
	@media only screen and (max-width: 600px) {
		.main-word-aside-img {
			width: 1em;
			height: 1em;
		}

		.side-note {
			font-size: 12px;
		}
	}
</style>
