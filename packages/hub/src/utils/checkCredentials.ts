import type { Credentials } from "../types/public";

export function checkCredentials(credentials?: Credentials): void {
	if (!credentials || credentials.accessToken === undefined || credentials.a