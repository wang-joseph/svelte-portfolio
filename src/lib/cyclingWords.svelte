<script lang="ts">
	import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

	import { cycleText, cycleCountdown } from '../stores/cyclingText';

	export let size: number = 48;
	export const stopCycleCallback: () => void = () => {
		clearInterval(cyclingCountdownId);
	};
	export const startCycleCallback: () => void = () => {
		cyclingCountdownId = setInterval(() => {
			cyclingTextIndex++;
		}, $cycleCountdown);
	};

	let cyclingTextIndex = 0;
	let displayedText: string;
	$: displayedText = $cycleText[cyclingTextIndex % $cycleText.length];

	let cyclingCountdownId: NodeJS.Timer;

	onMount(() => {
		cyclingCountdownId = setInterval(() => {
			cyclingTextIndex++;
		}, $cycleCountdown);
	});
</script>

{#key displayedText}
	<h4 style={`font-size: ${size}px`} in:fly={{ y: 50, duration: 500 }}>
		{displayedText}
	</h4>
{/key}

<style>
    h4 {
        margin: 0;
        font-family: 'Beckman Free', serif;
    }
</style>
