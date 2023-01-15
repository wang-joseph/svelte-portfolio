<script lang="ts">
    import Header from '../lib/header.svelte';
	import About from './about.svelte';

    import { pageStatus } from '../stores/pageStatus';

</script>

<Header />

{#if $pageStatus == 0}
    <About />
{/if}

{#if $pageStatus == 1}
    <div id="about">
        <About />
    </div>
{/if}

{#if $pageStatus == 2}
    <About />
{/if}

{#if $pageStatus == 3}
    <About />
{/if}

{#if $pageStatus == 4}
    <About />
{/if}

{#if $pageStatus == 5}
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
