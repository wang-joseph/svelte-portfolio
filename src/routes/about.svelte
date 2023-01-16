<script>
	import { slide } from 'svelte/transition';
</script>

<div transition:slide>
	<div class="background-text" transition:slide>
		<span class="inner-bg-text">About Me</span>
	</div>

	<div class="text-image-split">
		<div class="intro-text">
			<p>
				Howdy! I'm Joseph, a current University of Waterloo CS undergraduate.
				<br/><br/>
				I have a passion of learning whatever I find interesting, tech or not. Right now, I'm learning cardistry, but I've also dabbled in photography, guitar, video editing, and music production! I also enjoy instruments, with Ukulele being my favourite. 
				<br /><br /> 
				And of course, I'm also passionate about tech! I love TypeScript, and I'm currently learning a few other languages and frameworks like Rust, Go, and Flutter. Hardware is one of the things I'm interested in, and I definitely plan to create some physical projects in the near future.
				<br /><br /> 
				<small> Feel free to reach out! :) </small>
			</p>
		</div>

		<div class="image">
			<img class="me-png" src="./me.png" alt="me" />
		</div>
	</div>
</div>

<style>
	.background-text {
		height: 100%;
		width: 100%;

		position: absolute;
		display: block;
		font-family: 'Beckman Free';

		top: 0;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 0);

		font-size: 512px;
		text-overflow: clip;
		opacity: 0.1;
		user-select: none;
		padding: 0;
		margin: 0;
		line-height: 70%;

		z-index: -1;
	}

	.inner-bg-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		text-align: center;
	}

	.text-image-split {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		margin-top: 5%;
	}

	.intro-text {
		width: 40vw;
		margin-left: 10%;
	}

	.image {
		width: 25vw;
		padding: 0.5%;

		height: auto;
		margin-right: 10%;
    	transition: all 0.25s;

		display: block;
	
  		border: 3px dashed #dfab00;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.me-png {
		width: 100%;
		height: auto;
	}

	p {
		font-family: 'Josefin Sans Light';
		font-size: 1.4em;
		font-weight: bold;
	}

	p > small {
		font-size: 0.75em;
	}

	/* Media queries for mobile */
	@media only screen and (max-width: 600px) {
		.background-text {
			font-size: 128px;
		}

		.text-image-split {
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.intro-text {
			width: 80vw;
			margin-left: 0;
		}

		.image {
			width: 80vw;
			margin-right: 0;
			margin-bottom: 5%;
		}

		p {
			font-size: 1.25em;
		}
	}

	/* TODO: fix so that text can appear mobile too */
	@media only screen and (max-width: 1000px) {
		.background-text {
            display: none;
		}
	}
</style>
