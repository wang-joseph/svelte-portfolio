import { readable, type Readable } from 'svelte/store';

interface colorGradient {
	rot: string;
	startColor: string;
	midColor: string;
	endColor: string;
}

interface cyclingColorsInterface {
	0?: colorGradient;
	1?: colorGradient;
	2?: colorGradient;
	3?: colorGradient;
	4?: colorGradient;
	5?: colorGradient;
}

export const cycleColors = readable([
	{},
	{
		rot: '90deg',
		startColor: 'rgba(255, 89, 89, 1) 0%',
		midColor: 'rgba(237, 255, 0, 1) 52%',
		endColor: 'rgba(255, 89, 89, 1) 100%'
	},
	{
		rot: '90deg',
		startColor: 'rgba(89, 255, 121, 1) 0%',
		midColor: 'rgba(255, 229, 0, 1) 52%',
		endColor: 'rgba(89, 255, 121, 1) 100%'
	},
	{
		rot: '90deg',
		startColor: 'rgba(246, 89, 255, 1) 0%',
		midColor: 'rgba(70, 0, 255, 1) 52%',
		endColor: 'rgba(246, 89, 255, 1) 100%'
	},
	{
		rot: '90deg',
		startColor: 'rgba(99, 89, 255, 1) 0%',
		midColor: 'rgba(0, 239, 255, 1) 52%',
		endColor: 'rgba(99, 89, 255, 1) 100%'
	},
	{}
]);
