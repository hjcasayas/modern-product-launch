export const BlockNames = {
  ComponentBlocksHero: "ComponentBlocksHero",
} as const;

export type BlockNameType = keyof typeof BlockNames;
