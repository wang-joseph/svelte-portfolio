<script lang="ts">
	import { fly } from 'svelte/transition';
	import { readable } from 'svelte/store';
	import { onDestroy, onMount } from 'svelte';

	const cycleText = readable(['the hopefully employed', 'not a UX designer']);
	const cycleCountdown = readable(5000);
	let cyclingTextIndex = 0;

	let displayedText: string;
	$: displayedText = $cycleText[cyclingTextIndex % $cycleText.length];

	let countdownId: NodeJS.Timer;

	const letterInNamesAndLinks = readable([
		'J',
		'obout me',
		'socials',
		'experience',
		'portfolio',
		'h'
	]);

	const expandLetters = (i: number) => {
		const letter = document.querySelectorAll(`.letter-${i}`);
		const bigLetter = document.querySelector(`.big-letter-${i}`) as HTMLElement;

		if (!letter || letter.length == 0 || !bigLetter) return;

		letter.forEach((letter) => {
			let htmlElem = letter as HTMLElement;
			htmlElem.style.letterSpacing = '0em';
			addGradient(htmlElem, i);
		});

		addGradient(bigLetter, i);
		clearInterval(countdownId);
	};

	const resetLetters = (i: number) => {
		const letter = document.querySelectorAll(`.letter-${i}`);
		const bigLetter = document.querySelector(`.big-letter-${i}`) as HTMLElement;

		if (!letter || letter.length == 0 || !bigLetter) return;

		letter.forEach((letter) => {
			let htmlElem = letter as HTMLElement;
			htmlElem.style.letterSpacing = '-1em';
			removeGradient(htmlElem, i);
		});

		removeGradient(bigLetter, i);

		// restart the cycling text countdown
		countdownId = setInterval(() => {
			cyclingTextIndex++;
		}, $cycleCountdown);
	};

	const addGradient = (elem: HTMLElement, i: number) => {
		elem.classList.add('bg-color-' + i);
	};
	const removeGradient = (elem: HTMLElement, i: number) => {
		elem.classList.remove('bg-color-' + i);
	};

	onMount(() => {
		countdownId = setInterval(() => {
			cyclingTextIndex++;
		}, $cycleCountdown);
	});

    const shiftDots = (e: MouseEvent) => {
        const mainTextDiv = document.getElementById('main-text') as HTMLElement;

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const panX = x * 5;
        const panY = y * 5;

        mainTextDiv.style.backgroundPosition = `${panX}px ${panY}px, 7.5vmin 7.5vmin`;
    }
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
					class="name big-letter-{i}"
					on:mouseenter={() => expandLetters(i)}
					on:mouseleave={() => resetLetters(i)}
				>
					<span class="clickable letter">{letter.charAt(0)}</span>
                    <span class="clickable smaller-letter letter-{i}">{letter.slice(1)}</span>
				</span>
			{/each}
		</h1>
	</div>
	<div class="line">
		<h3 class="word">Wang</h3>
	</div>
</div>

<style>
	:global(body) {
		background-color: #000;
		color: #fff;
		
	}

    #main-text {
        background-image: radial-gradient(rgba(255, 255, 255, 0.1) 8%, transparent 8%),
            radial-gradient(rgba(168, 168, 168, 0.1) 8%, transparent 8%);

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
	}

	.bg-color-0 {
		background: gray;
		animation: background-pan 3s linear infinite;
		background-size: 400% 400%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}

	.bg-color-1 {
		background: linear-gradient(
			90deg,
			rgba(255, 89, 89, 1) 0%,
			rgba(237, 255, 0, 1) 52%,
			rgba(255, 89, 89, 1) 100%
		);
		animation: background-pan 3s linear infinite;
		background-size: 400% 400%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}
	.bg-color-2 {
		background: linear-gradient(
			90deg,
			rgba(89, 255, 121, 1) 0%,
			rgba(255, 229, 0, 1) 52%,
			rgba(89, 255, 121, 1) 100%
		);
		animation: background-pan 3s linear infinite;
		background-size: 400% 400%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}
	.bg-color-3 {
		background: rgb(246, 89, 255);
		background: linear-gradient(
			90deg,
			rgba(246, 89, 255, 1) 0%,
			rgba(70, 0, 255, 1) 52%,
			rgba(246, 89, 255, 1) 100%
		);
		animation: background-pan 3s linear infinite;
		background-size: 400% 400%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}
	.bg-color-4 {
		background: linear-gradient(
			to right,
			rgba(99, 89, 255, 1) 0%,
			rgba(0, 239, 255, 1) 52%,
			rgba(99, 89, 255, 1) 100%
		);
		animation: background-pan 3s linear infinite;
		background-size: 400% 400%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}

	.bg-color-5 {
		color: gray;
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

	.fancy {
		position: relative;
		z-index: 1;
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

	@font-face {
		font-family: 'Beckman Free';
		src: url('/fonts/Beckman-Free.otf');
	}
</style>
