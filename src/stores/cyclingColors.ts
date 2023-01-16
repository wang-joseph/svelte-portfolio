import { readable, type Readable } from 'svelte/store';

interface colorGradient {
	rot: string;
	startColor: string;
	midColor: string;
	endColor: string;
}

export const cycleColors = readable([
	{
		rot: '90deg',
		startColor: 'rgba(0, 0, 0, 1) 0%',
		midColor: 'rgba(255, 255, 255, 1) 50%',
		endColor: 'rgba(0, 0, 0, 1) 100%'
	},
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
	{
        rot: '90deg', 
        startColor: "rgba(231,48,0,1) 0%", 
        midColor: "rgba(220,101,243,1) 52%", 
        endColor: "rgba(231,48,0,1) 100%"
    }
]);
