/**
 * Execute queue of promises.
 *
 * Inspired by github.com/rxaviers/async-pool
 */
export async function promisesQueue<T>(factories: (() => Promise<T>)[], concurrency: number): Promise<T[]> {
	const promises: Promise<T>[] = [];
	const executing: Promise<void>[] = [];
	for (const factory of factories) {
		const p = factory();
		prom