import type { Plan } from "./plan";
import type { User } from "./user";
import type { CallbacksScheme } from "./callbacks-scheme";

export type CheckoutSessionCreationScheme = {
    plan: Plan;
    subscriber: User;
    callbacks: CallbacksScheme;
};
