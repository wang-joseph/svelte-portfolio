<script>
	import { slide } from 'svelte/transition';
</script>

<div id="about-me" class="about-me" transition:slide>
	<div class="background-text">
		<span class="inner-bg-text">About Me</span>
	</div>

	<div class="text-image-split">
		<div class="intro-text">
			<p>
				Howdy! I'm Joseph, a current University of Waterloo CS undergraduate.
				<br/><br/>
				I have a passion of learning whatever I find interesting, tech or not. Right now, I'm learning Cardistry and Svelte (hope u like the site), but I yearn to one day proudly say "wow, I know rust now".
				<br /><br /> 
				I think effervescent is the best word to make you sound smart, Lysol is the best cleaning product, and video game OSTs are underappreciated. Say hi to me whenever!
				<br /><br /> 
				<small> please don't dox me </small>
			</p>
		</div>

		<div class="image">
			<img class="me-png" src="./me.png" alt="me" />
		</div>
	</div>
</div>

<style>
	.debug {
		border: 1px solid red;
	}

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

	.about-me {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 60vh;
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
		font-size: 1.5em;
		font-weight: bold;
	}

	p > small {
		font-size: 0.75em;
	}
</style>
