
import type { AccessTokenRole, AuthType } from "../public";

interface ApiWhoAmIBase {
	/** Unique ID persistent across renames */
	id:   string;
	type: "user" | "org" | "app";
	name: string;
}

interface ApiWhoAmIEntityBase extends ApiWhoAmIBase {
	fullname:  string;
	email:     string | null;
	canPay:    boolean;
	/**
	 * @deprecated
	 */
	plan?:     unknown;
	avatarUrl: string;
	/**
	 * Unix timestamp in seconds
	 */
	periodEnd: number | null;
}

interface ApiWhoAmIOrg extends ApiWhoAmIEntityBase {
	type: "org";
}

interface ApiWhoAmIUser extends ApiWhoAmIEntityBase {
	type:          "user";
	email:         string;
	emailVerified: boolean;
	isPro:         boolean;
	orgs:          WhoAmIOrg[];
}

interface ApiWhoAmIApp extends ApiWhoAmIBase {
	type:   "app";
	name:   string;
	scope?: {
		entities: string[];
		role:     AccessTokenRole;
	};
}

export type ApiWhoAmIReponse = ApiWhoAmIUser | ApiWhoAmIOrg | ApiWhoAmIApp;
