import { readable } from 'svelte/store';

export const cycleText = readable([
	// 'the hopefully employed',
	// 'not a UX designer',
	// 'the "one and only"',
	// 'the spent 3 days on this'


	// business friendly
	'passionate about learning,',
	'a software engineer,',
	'the ukulele player,',
	'the typescript enthusiast,',
	'the cardistry learner,',
	'interested in graphic design,',
	'the uwaterloo student,',
]);
export const cycleCountdown = readable(5000);
    
