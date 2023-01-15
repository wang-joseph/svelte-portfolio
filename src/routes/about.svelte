<script>
	import { slide } from 'svelte/transition';

</script>

<div id="about-me" class="about-me debug" transition:slide|local>
	<span class="background-text">About Meeee</span>

	<p>lorem ipsem test test test</p>
</div>

<style>
	.debug {
		border: 1px solid red;
	}


	.background-text {
		position: absolute;
		font-family: "Beckman Free";

		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		
		font-size: 516px;
		text-overflow: clip;
		opacity: 0.1;
		user-select: none;
		padding: 0;
		margin: 0;
		line-height: 80%;
	}

	.about-me {
		position: relative;
		background-color: black;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 20vh;
	}
</style>
