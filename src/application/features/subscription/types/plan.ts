export const Plan = {
    None: "None",
    Basic: "Basic",
    Premium: "Premium"
} as const;

export type Plan = typeof Plan[keyof typeof Plan];
