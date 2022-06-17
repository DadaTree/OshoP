/**
 * Execute queue of promises in a streaming fashion.
 *
 * Optimized for streaming:
 * - Expects an iterable as input
 * - Does not return a list of all results
 *
 * Inspired by github.com/rxaviers/async-pool
 */
export async function promisesQueueStreaming<T>(
	factories: AsyncIterable<() => Promise<T>> | Iterable<() => Promise<T>>,
	co