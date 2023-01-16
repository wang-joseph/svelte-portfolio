<script>
	import { slide } from 'svelte/transition';
</script>

<div transition:slide>
	<div class="background-text" transition:slide>
		<span class="inner-bg-text">YOU'RE HERE GOOD WORK</span>
	</div>

    <div class="intro-text">
        <p> Welcome, glad you made it! </p>
        <p class="inner-thoughts"> The other letters have other functions too.</p>
        <p class="inner-thoughts"> Click to bring up their page. </p>
        
        <br><br><br>

        <p class="inner-thoughts"> This site was made in a few days with Svelte as a learning project.</p> 
        <p class="inner-thoughts"> Please excuse any bugs as a result! I'm still in the process of squashing bugs.</p> 
        <p class="inner-thoughts"> For what else I've done, check out the EP trio in my name.</p> 
        <br><br><br>

        <p class="inner-thoughts"> Click the J to toggle between light and dark modes!. </p>
        <!-- <p class="inner-thoughts"> After realizing your mistake, click again for the sweet embrace of dark mode.</p>  -->

        <p class="inner-thoughts"> <small> I also have plans to hide a few things in here...good luck finding them </small></p> 

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

    /* media queries for phone */
    @media only screen and (max-width: 600px) {
        .background-text {
            font-size: 128px;
        }

        .intro-text {
            width: 90%;
            padding-left: 5%;
            padding-right: 5%;
        }

        p {
            font-size: 1.5em;
        }

        .inner-thoughts {
            font-size: 1.25em;
        }
    }

    @media only screen and (max-width: 1000px) {
		.background-text {
            display: none;
		}
	}
</style>
