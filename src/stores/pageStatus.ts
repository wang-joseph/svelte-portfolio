import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const pageStatus: Writable<number> = writable(-1);
