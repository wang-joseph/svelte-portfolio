<script lang="ts">
	import { fly } from 'svelte/transition';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';

	import { cycleText, cycleCountdown } from '../stores/cyclingText';
	import { letterInNamesAndLinks } from '../stores/nameLinks';
    import { cycleColors } from '../stores/cyclingColors';

    // TODO: prop this
    const mainColor = '#fff'; 

	let cyclingTextIndex = 0;
	let displayedText: string;
	$: displayedText = $cycleText[cyclingTextIndex % $cycleText.length];

	let cyclingCountdownId: NodeJS.Timer;

	let bigLetters = [];

	const expandLetters = (i: number) => {
		const letter = document.getElementById(`letter-${i}`) as HTMLElement;
		const bigLetter = document.getElementById(`big-letter-${i}`) as HTMLElement;

		if (!letter || !bigLetter) return;

		letter.style.letterSpacing = '0em';

		giveColors(letter, i);
		giveColors(bigLetter, i);

        // stop the cycling text for UX reasons
		clearInterval(cyclingCountdownId);
	};

	const resetLetters = (i: number) => {
		const letter = document.getElementById(`letter-${i}`) as HTMLElement;
		const bigLetter = document.getElementById(`big-letter-${i}`) as HTMLElement;

		if (!letter || !bigLetter) return;

		letter.style.letterSpacing = '-1em';

        resetColors(letter);
        resetColors(bigLetter);

		// restart the cycling text countdown
		cyclingCountdownId = setInterval(() => cyclingTextIndex++, $cycleCountdown);
	};

    const giveColors = (elem: HTMLElement, i: number) => {
        const allColors = get(cycleColors);
        const color = allColors[i];

        if (color === undefined || Object.keys(color).length === 0) return;

        console.log(elem.style.background);

        elem.style.background =
        `linear-gradient(${color.rot}, ${color.startColor}, ${color.midColor}, ${color.endColor})`;
        elem.style.backgroundSize = '400% 400%';
        elem.style.webkitBackgroundClip = 'text';
        elem.style.backgroundClip = 'text';
        elem.style.webkitTextFillColor = 'transparent';
    }

    const resetColors = (elem: HTMLElement) => {
        elem.style.background = "";
        elem.style.webkitBackgroundClip = "";
        elem.style.backgroundClip = "";
        elem.style.webkitTextFillColor = "";
    }

	const shiftDots = (e: MouseEvent) => {
		const mainTextDiv = document.getElementById('main-text') as HTMLElement;

		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;

		const panX = x * 5;
		const panY = y * 5;

		mainTextDiv.style.backgroundPosition = `${panX}px ${panY}px, 7.5vmin 7.5vmin`;
	};

	onMount(() => {
		cyclingCountdownId = setInterval(() => {
			cyclingTextIndex++;
		}, $cycleCountdown);
	});
</script>

<!-- add a centered bold Joseph in the middle of the page -->
<div id="main-text" class="bold center" on:mousemove={shiftDots}>
	<div class="line">
		<h3 class="word">Hi, I'm</h3>
	</div>
	<div class="line">
		{#key displayedText}
			<h4 class="word" in:fly={{ y: 50, duration: 500 }}>
				{displayedText}
			</h4>
		{/key}
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
	</div>
	<div class="line">
		<h3 class="word">Wang</h3>
	</div>
</div>

<style>
	#main-text {
		background-image: radial-gradient(rgba(255, 255, 255, 0.15) 8%, transparent 8%),
			radial-gradient(rgba(168, 168, 168, 0.15) 8%, transparent 8%);

		/* position second row of dots halfway diagonally to first row */
		background-position: 0 0, 7.5vmin 7.5vmin;
		background-size: 5vmin 5vmin;
	}

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
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bold {
		font-weight: bold;
	}

	.word {
		font-family: 'Beckman Free';
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
		font-size: 64px;
		margin: 0;
	}

	h4 {
		font-size: 48px;
		margin: 0;
	}
</style>
