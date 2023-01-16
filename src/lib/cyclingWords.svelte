<script lang="ts">
	import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

	import { cycleText, cycleCountdown } from '../stores/cyclingText';


	// cycling text index can choose a random sentence to start off at
	// TODO: above makes this refresh twice -- fix this
	// let cyclingTextIndex = Math.floor(Math.random() * $cycleText.length);
	let cyclingTextIndex = 0;

	let displayedText: string;
	$: displayedText = $cycleText[cyclingTextIndex % $cycleText.length];

	onMount(() => {
		setInterval(() => {
			cyclingTextIndex++;
		}, $cycleCountdown);
	});
</script>

{#key displayedText}
	<h4  in:fly={{ y: 50, duration: 500 }}>
		{displayedText}
	</h4>
{/key}

<style>
    h4 {
        margin: 0;
        font-family: 'Beckman Free', serif;
		font-size: 36px;
    }

	/* media queries for phones */
	@media only screen and (max-width: 600px) {
		h4 {
			font-size: 24px;
		}
	}

</style>
