<script lang="ts">
    import Header from '../lib/header.svelte';
	import About from './about.svelte';

    import { pageStatus } from '../stores/pageStatus';

</script>

<Header />

{#if $pageStatus["J"]}
    <About />
{/if}

{#if $pageStatus["O"]}
    <div id="about">
        <About />
    </div>
{/if}

{#if $pageStatus["S"]}
    <About />
{/if}

{#if $pageStatus["E"]}
    <About />
{/if}

{#if $pageStatus["P"]}
    <About />
{/if}

{#if $pageStatus["H"]}
    <About />
{/if}

<style>
	:global(body) {
		background-color: #000;
		color: #fff;
		overflow-x: hidden;
        scroll-behavior: smooth;

        padding: 0;
        margin: 0;
	}

	@font-face {
		font-family: 'Beckman Free';
		src: url('/fonts/Beckman-Free.otf');
	}

    @font-face {
		font-family: 'Josefin Sans Light';
		src: url('/fonts/JosefinSans-Light.ttf');
	}
</style>
