export const BlockNames = {
  ComponentBlocksHero: "ComponentBlocksHero",
  ComponentBlocksLogoCloud: "ComponentBlocksLogoCloud",
} as const;

export type BlockNameType = keyof typeof BlockNames;
