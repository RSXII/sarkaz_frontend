type CharacterID = number;

export type Character = {
  Name: string;
  Level: number;
  MaxHP: number;
  Attack: number;
  Defense: number;
  MagicResistance: number;
  AttackInterval: number;
  CharacterID: CharacterID;
  RedeployTime: number;
  DeployCost: number;
  BlockCount: number;
  Rarity: number;
  EliteLevel: number;
};

export type Enemy = {
  Name: string;
  Level: number;
  MaxHP: number;
  Attack: number;
  Defense: number;
  MagicResistance: number;
  AttackInterval: number;
  EnemyId: number;
};
export type CharacterSimple = {
  Name: string;
  Rarity: number;
};
