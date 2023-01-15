<script lang="ts">
	import { letterInNamesAndLinks } from '../stores/nameLinks';
	import { cycleColors } from '../stores/cyclingColors';

	import CenteredDots from './centeredDots.svelte';
	import CyclingWords from './cyclingWords.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let stopWordCycle: () => void;
	let startWordCycle: () => void;

    let needsToShow = false;
    let showed = false;
    let cancelledEarly = true;
    let hasHovered = false;
    let hasClicked = false;
    let hoverPopup: NodeJS.Timer;

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

    onMount(() => {
        hoverPopup = setTimeout(() => {
            needsToShow = true;
            showed = true;
            cancelledEarly = false;
        }, 1500);
    });
</script>

<!-- add a centered bold Joseph in the middle of the page -->
<div id="main-text">
	<CenteredDots id="main-dots">
		<div class="line">
			<h3 class="word">Hi, I'm</h3>
		</div>
		<div class="line">
			<span class="word">
				<CyclingWords
					size={36}
					bind:stopCycleCallback={stopWordCycle}
					bind:startCycleCallback={startWordCycle}
				/>
			</span>
		</div>
		<div class="line">
			<h1 class="fancy word">
				{#each $letterInNamesAndLinks as letter, i}
					<span
						id="big-letter-{i}"
						class="name bigger-letter"
						on:mouseenter={() => expandLetters(i)}
						on:mouseleave={() => resetLetters(i)}
					>
						<span class="clickable letter">{letter.charAt(0)}</span>
						<span id="letter-{i}" class="clickable smaller-letter">{letter.slice(1)}</span>
					</span>
				{/each}
			</h1>
            {#if needsToShow}
                <span class="main-word-aside" in:fly="{{ y: 50, duration: 1000 }}" out:fade>
                    <h4 class="side-note">Hover my name!</h4>
                    <img class="main-word-aside-img" src="./pointing-arrow.png" alt=""/>
                </span>
            {:else if (cancelledEarly && hasHovered)}
                <span class="main-word-aside" in:fade out:fade>
                    <h4 class="side-note">Hey! Try clicking!</h4>
                    <img class="main-word-aside-img" src="./pointing-arrow.png" alt=""/>
                </span>
            {:else if (showed && !hasClicked) }
                <span class="main-word-aside" in:fade out:fade>
                    <h4 class="side-note">Now, try clicking!</h4>
                    <img class="main-word-aside-img" src="./pointing-arrow.png" alt=""/>
                </span>
            {/if}
		</div>
		<div class="line">
			<h3 class="word">Wang</h3>
		</div>
	</CenteredDots>
</div>

<style>
	.debug {
		border: 1px solid red;
	}

	.name {
		display: inline-block;
		margin: 0;
		padding: 0;

		letter-spacing: -0.1em;
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.line {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bold {
		font-weight: bold;
	}

	.word {
		font-family: 'Beckman Free', serif;
	}

	.side-note {
		font-family: 'Josefin Sans Light', sans-serif;
	}

	.main-word-aside {
		position: absolute;
		bottom: 0;
        right: 0;

        display: flex;
        align-items: flex-end;

        background: linear-gradient(90deg, rgba(246,89,255,1) 0%, rgba(0,222,255,1) 0%, rgba(0,84,231,1) 100%);
        background-size: 200% 200%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}

    .main-word-aside-img {
        width: 2em;
        height: 2em;        
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

		/* have the words on the bottom */
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

    h4 {
		font-size: 16px;
		margin: 0;
	}
</style>
