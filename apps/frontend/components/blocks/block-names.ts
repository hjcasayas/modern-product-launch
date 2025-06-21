export const BlockNames = {
  ComponentBlocksHero: "ComponentBlocksHero",
  ComponentBlocksLogoCloud: "ComponentBlocksLogoCloud",
  ComponentBlocksBenefits: "ComponentBlocksBenefits",
} as const;

export type BlockNameType = keyof typeof BlockNames;
