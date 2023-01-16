<script lang="ts">
    import Header from '../lib/header.svelte';
	import About from './about.svelte';

    import CenteredDots from '../lib/centeredDots.svelte';

    import { pageStatus } from '../stores/pageStatus';

</script>

<CenteredDots id="main-dots">
    <Header />

    {#if $pageStatus == 0}
    {/if}

    {#if $pageStatus == 1}
        <About />
    {/if}

    {#if $pageStatus == 2}
    {/if}

    {#if $pageStatus == 3}
    {/if}

    {#if $pageStatus == 4}
    {/if}

    {#if $pageStatus == 5}
    {/if}
</CenteredDots>

<style>
	:global(body) {
		background-color: #000;
		color: #fff;
		overflow-x: hidden;
        overflow-y: hidden;
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
