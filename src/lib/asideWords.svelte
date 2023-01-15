<script lang="ts">
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

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
		}, 1500);
    });
</script>

{#if needsToShow}
	<span class="main-word-aside" in:fly={{ y: 50, duration: 1000 }} out:fade>
		<h4 class="side-note">Hover my name!</h4>
		<img class="main-word-aside-img" src="./pointing-arrow.png" alt="" />
	</span>
{:else if cancelledEarly && hasHovered}
	<span class="main-word-aside" in:fly={{ y: 50, duration: 1000 }} out:fade>
		<h4 class="side-note">Hey! Try clicking!</h4>
		<img class="main-word-aside-img" src="./pointing-arrow.png" alt="" />
	</span>
{:else if showed && !hasClicked}
	<span class="main-word-aside" in:fade out:fade>
		<h4 class="side-note">Now, try clicking!</h4>
		<img class="main-word-aside-img" src="./pointing-arrow.png" alt="" />
	</span>
{/if}

<style>
    .side-note {
		font-family: 'Josefin Sans Light', sans-serif;
	}

	.main-word-aside {
		position: absolute;
		bottom: -10%;
		right: 0;

		display: flex;

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
		width: 2em;
		height: 2em;
	}
</style>
