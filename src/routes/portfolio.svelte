<script>
	import { slide } from 'svelte/transition';
</script>


<div id="portfolio" transition:slide>
    <div class="background-text" transition:slide>
		<span class="inner-bg-text">PORT FOLIO</span>
	</div>

    <p>Sorry, I'm still working on this section! Gotta make it nice and cooool 😎</p>

</div>

<style>
    #portfolio {
        margin-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
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

        text-overflow: "";
	}
	p {
		font-family: 'Beckman Free';
		font-size: 2em;
		font-weight: bold;
        padding: 0;
        margin: 0;
	}

	/* media queries for phones */
	@media only screen and (max-width: 600px) {
		p {
			font-size: 1.25em;
            margin-left: 5%;
		}
	}
	
    @media only screen and (max-width: 1000px) {
		.background-text {
            display: none;
		}
	}
</style>
