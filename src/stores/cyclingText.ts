import { readable } from 'svelte/store';

export const cycleText = readable([
	'the hopefully employed',
	'not a UX designer',
	'the "one and only"',
	'the spent 3 days on this'
]);
export const cycleCountdown = readable(5000);
    
