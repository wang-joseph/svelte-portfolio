<script lang="ts">
	import { letterInNamesAndLinks } from '../stores/nameLinks';
	import { cycleColors } from '../stores/cyclingColors';
	import { pageStatus } from '..//stores/pageStatus';

	import CenteredDots from './centeredDots.svelte';
	import CyclingWords from './cyclingWords.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import AsideWords from './asideWords.svelte';

	let stopWordCycle: () => void;
	let startWordCycle: () => void;

	let needsToShow = false;
	let showed = false;
	let cancelledEarly = true;
	let hasHovered = false;
	let hasClicked = false;
	let hoverPopup: NodeJS.Timer;

	// TODO: figure out why the vertical scroll happens sometimes
	let heightOfMain = 100;

	const expandLetters = (i: number) => {
		const letter = document.getElementById(`letter-${i}`) as HTMLElement;
		const bigLetter = document.getElementById(`big-letter-${i}`) as HTMLElement;

		if (!letter || !bigLetter) return;

		//set shouldShow to false if there is a letter that is not expanded
		if ($letterInNamesAndLinks[i].slice(1).length > 0) {
			needsToShow = false;
			hasHovered = true;
			showed = true;
			clearTimeout(hoverPopup);
		}

		letter.style.letterSpacing = '0em';

		giveColors(letter, i);
		giveColors(bigLetter, i);

		// stop the cycling text for UX reasons
		stopWordCycle();
	};

	const resetLetters = (i: number) => {
		if ($pageStatus === i) return;

		const letter = document.getElementById(`letter-${i}`) as HTMLElement;
		const bigLetter = document.getElementById(`big-letter-${i}`) as HTMLElement;

		if (!letter || !bigLetter) return;

		letter.style.letterSpacing = '-1em';

		resetColors(letter);
		resetColors(bigLetter);

		// restart the cycling text countdown
		startWordCycle();
	};

	const giveColors = (elem: HTMLElement, i: number) => {
		const allColors = $cycleColors;
		const color = allColors[i];

		if (color === undefined || Object.keys(color).length === 0) return;

		elem.style.background = `linear-gradient(${color.rot}, ${color.startColor}, ${color.midColor}, ${color.endColor})`;
		elem.style.backgroundSize = '400% 400%';
		elem.style.webkitBackgroundClip = 'text';
		elem.style.backgroundClip = 'text';
		elem.style.webkitTextFillColor = 'transparent';
	};

	const resetColors = (elem: HTMLElement) => {
		elem.style.background = '';
		elem.style.webkitBackgroundClip = '';
		elem.style.backgroundClip = '';
		elem.style.webkitTextFillColor = '';
	};
</script>

<!-- add a centered bold Joseph in the middle of the page -->
<div id="main-text">
	<CenteredDots id="main-dots">
		<div class="center" style={`height: ${heightOfMain}vh`} transition:slide>
			{#if $pageStatus == -1}
				<div class="line">
					<h3 class="word">Hi, I'm</h3>
				</div>
				<div class="line">
					<span class="word">
						<CyclingWords
							bind:stopCycleCallback={stopWordCycle}
							bind:startCycleCallback={startWordCycle}
						/>
					</span>
				</div>
			{/if}

			<div class="line">
				<h1 class="fancy word">
					{#each $letterInNamesAndLinks as letter, i}
						<a href="#about">
							<span
								id="big-letter-{i}"
								class="name bigger-letter"
								on:mouseenter={() => expandLetters(i)}
								on:mouseleave={() => resetLetters(i)}
								on:click={() => {
									if ($pageStatus == 1) {
										$pageStatus = -1;
										heightOfMain = 100;
									} else {
										$pageStatus = 1;
										heightOfMain = 20;
									}

									hasClicked = true;
								}}
								on:keydown
							>
								<span class="clickable letter">{letter.charAt(0)}</span>
								<span id="letter-{i}" class="clickable smaller-letter">{letter.slice(1)}</span>
							</span>
						</a>
					{/each}
				</h1>

				<AsideWords
					bind:needsToShow
					bind:cancelledEarly
					bind:showed
					bind:hasHovered
					bind:hasClicked
					bind:hoverPopup
				/>
			</div>

			{#if $pageStatus == -1}
				<div class="line">
					<h3 class="word">Wang</h3>
				</div>
			{/if}
		</div>
	</CenteredDots>
</div>

<style>
	#main-text {
		scroll-behavior: smooth;
		padding: 0;
		margin: 0;
		top: 0;
		left: 0;
	}

	.debug {
		border: 1px solid red;
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		transition: height 0.5s ease-in-out;
	}

	.name {
		display: inline-block;
		margin: 0;
		padding: 0;

		letter-spacing: -0.1em;
	}

	.line {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.word {
		font-family: 'Beckman Free', serif;
	}

	.letter {
		margin: 0;
		padding: 0;
		display: inline-block;

		animation: background-pan 3s linear infinite;
	}

	.smaller-letter {
		margin: 0;
		padding: 0;
		display: inline-block;
		font-size: 0.5em;
		overflow: hidden;
		transition: ease-in-out 0.3s;
		letter-spacing: -1em;

		position: relative;
		top: 0.25em;

		animation: background-pan 3s linear infinite;
	}

	.bigger-letter {
		animation: background-pan 3s linear infinite;
	}

	.fancy {
		position: relative;
		z-index: 1;
	}

	@keyframes background-pan {
		0% {
			background-position: 0% center;
		}

		to {
			background-position: -262% center; /* special number i guess */
		}
	}

	.clickable {
		cursor: pointer;
	}

	#main-text:has(.fancy:hover) .word:not(.fancy:hover) {
		opacity: 0.2;
		transition: ease-in-out 0.25s;
	}

	h1 {
		font-size: 156px;
		margin: 0;
	}

	h3 {
		font-size: 48px;
		margin: 0;
	}

	a {
		text-decoration: none;
		color: inherit;
		letter-spacing: -1em;
	}

	/* media queries for phones */
	@media only screen and (max-width: 600px) {
		h1 {
			font-size: 64px;
		}

		h3 {
			font-size: 24px;
		}
	}
</style>
