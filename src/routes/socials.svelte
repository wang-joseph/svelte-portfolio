<script>
	import { slide } from 'svelte/transition';
</script>

<div transition:slide>
	<div class="background-text" transition:slide>
		<span class="inner-bg-text">SUPER SOCIALS</span>
	</div>

	<div class="text-image-split">
		<div class="intro-text">
			<p> LinkedIn: <a href="https://linkedin.com/in/wang-joseph"><u>wang-joseph</u></a></p>
			<p> Github: <a href="https://github.com/wang-joseph"><u>wang-joseph</u></a></p>
			<p> Devpost: <a href="https://devpost.com/EmeraldEntities"><u>/EmeraldEntities</u></a></p>
		
			<br><br><br>
	
			<p class="inner-thoughts"> this page is a bit barren so here is a picture of my cat </p>
		</div>
		<div class="image">
			<img class="cat-jpg" src="./cat.jpg" alt="cat" />
		</div>
	</div>
</div>

<style>
	.debug {
		border: 1px solid red;
	}

	.text-image-split {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;

		margin-top: 5%;
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

	.intro-text {
		width: 60%;
        padding-left: 20%;
        margin-bottom: 5%;
	}

	.image {
		width: 50vw;
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

	.cat-jpg {
		width: 100%;
		height: auto;
	}

	p {
		font-family: 'Beckman Free';
		font-size: 2em;
		font-weight: bold;
        padding: 0;
        margin: 0;
	}

	a {
		font-family: 'Beckman Free';
		font-weight: bold;
		padding: 0;
		margin: 0;

		color: #0064cf;
		text-decoration: none;

		transition: color 0.25s;
	}

	a:hover {
		color: #04bcff;
	}

    .inner-thoughts {
        font-size: 1.5em;
        font-family: 'Josefin Sans Light';
        padding-bottom: 0.15em;
        padding-top: 0.10em;
    }

	/* media queries for phones */
	@media only screen and (max-width: 600px) {
		.background-text {
			font-size: 128px;
		}

		.text-image-split {
			flex-direction: column;
		}

		.image {
			width: 80%;
			margin-right: 0;
		}

		.intro-text {
			width: 90%;
			padding-left: 5%;
			padding-right: 5%
		}

		p {
			font-size: 1.25em;
		}

		.inner-thoughts {
			font-size: 1em;
		}
	}

	@media only screen and (max-width: 1000px) {
		.background-text {
            display: none;
		}
	}
</style>
