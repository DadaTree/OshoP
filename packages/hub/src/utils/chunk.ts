import { range } from "./range";

/**
 * Chunk array into arrays of length at most `chunkSize`
 *
 * @param chunkSize must be greater than or equal to 1
 */
export function chunk<T extends unknown[] | string>(arr: T, chunkSize: number): T[] {
	if (isNaN(chunkSize) || chunkSize < 1) {
		throw new RangeError("Invalid chunk size: " + chunkSize);
	}

	if (!arr.length) {
		return [];
	}

	/// Small opt