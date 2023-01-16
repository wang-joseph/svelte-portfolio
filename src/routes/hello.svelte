<script>
	import { slide } from 'svelte/transition';
</script>

<div id="about-me" class="about-me" transition:slide>
	<div class="background-text">
		<span class="inner-bg-text">YOU'RE HERE GOOD WORK</span>
	</div>

    <div class="intro-text">
        <p> Welcome, glad you made it! </p>
        <p class="inner-thoughts"> The other letters have other functions too.</p>
        <p class="inner-thoughts"> Click to bring up their page. </p>
        
        <br><br><br>

        <p class="inner-thoughts"> This site was made in a few days with Svelte as a learning project.</p> 
        <p class="inner-thoughts"> Please excuse any bugs as a result! I'll probably get to it.</p> 
        <p class="inner-thoughts"> For what I've done, check out the EP trio in my name.</p> 
        <p class="inner-thoughts"> <small> I also have plans to hide a few things in here...good luck finding them </small></p> 

        <br><br><br>
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

		font-size: 256px;
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
