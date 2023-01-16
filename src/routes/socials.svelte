<script>
	import { slide } from 'svelte/transition';
</script>

<div transition:slide>
	<div class="background-text" transition:slide>
		<span class="inner-bg-text">SUPER SOCIALS</span>
	</div>

    <div class="intro-text">
        <p> LinkedIn: wang-joseph</p>
        <p> Github: wang-joseph</p>
        <p> Devpost: EmeraldEntities</p>
    
        <br><br><br>

        <p class="inner-thoughts"> this page is a bit barren so here is a picture of my cat </p>
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

	.intro-text {
        margin-top: 5%;
		width: 60%;
        padding-left: 20%;
        padding-right: 20%;
	}

	p {
		font-family: 'Beckman Free';
		font-size: 2em;
		font-weight: bold;
        padding: 0;
        margin: 0;
	}

    p > small {
        font-size: 0.75em;
    }

    .inner-thoughts {
        font-size: 1.5em;
        font-family: 'Josefin Sans Light';
        padding-bottom: 0.15em;
        padding-top: 0.10em;
    }
</style>
