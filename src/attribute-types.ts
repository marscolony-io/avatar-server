export type Attribute = {
  trait_type: string;
  value: string;
};

export const attribute = (trait_type: string, value: string): Attribute => {
  return { trait_type, value };
};

export type Rarity = 'Common' | 'Rare' | 'Legendary';

export type WithRarity<T> = Record<string, [T, Rarity]>; // WithRarity<тип> это объект { ключ: [тип, Rarity] }

export type WithoutRarity<T> = Record<string, T>;

export type Gender = 'Male' | 'Female';

export type Profession = 'Programmer' | 'Cosmic bounty hunter' | 'Scientist' | 'Technician';

export type Background = 'Cadet Blue' | 'Explorer Purple' | 'Atlas Red';

export type Person =
  | 'Female; Type - A; Hair - 1'
  | 'Female; Type - A; Hair - 2'
  | 'Female; Type - A; Hair - 3'
  | 'Female; Type - B; Hair - 1'
  | 'Female; Type - B; Hair - 2'
  | 'Female; Type - B; Hair - 3'
  | 'Female; Type - C; Hair - 1'
  | 'Female; Type - C; Hair - 2'
  | 'Female; Type - C; Hair - 3'
  | 'Female; Type - D; Hair - 1'
  | 'Female; Type - D; Hair - 2'
  | 'Female; Type - D; Hair - 3'
  | 'Female; Type - E; Hair - 1'
  | 'Female; Type - E; Hair - 2'
  | 'Female; Type - E; Hair - 3'
  | 'Male; Type - A; Hair - 1'
  | 'Male; Type - A; Hair - 2'
  | 'Male; Type - A; Hair - 3'
  | 'Male; Type - B; Hair - 1'
  | 'Male; Type - B; Hair - 2'
  | 'Male; Type - B; Hair - 3'
  | 'Male; Type - C; Hair - 1'
  | 'Male; Type - C; Hair - 2'
  | 'Male; Type - C; Hair - 3'
  | 'Male; Type - D; Hair - 1'
  | 'Male; Type - D; Hair - 2'
  | 'Male; Type - D; Hair - 3'
  | 'Male; Type - E; Hair - 1'
  | 'Male; Type - E; Hair - 2'
  | 'Male; Type - E; Hair - 3'
  | 'Female; Type - A; Hair - 4'
  | 'Female; Type - B; Hair - 4'
  | 'Female; Type - C; Hair - 4'
  | 'Female; Type - D; Hair - 4'
  | 'Female; Type - E; Hair - 4'
  | 'Male; Type - A; Hair - 4'
  | 'Male; Type - B; Hair - 4'
  | 'Male; Type - C; Hair - 4'
  | 'Male; Type - D; Hair - 4'
  | 'Male; Type - E; Hair - 4'
  | 'Female; Type - A; Hair - Pink hair'
  | 'Female; Type - C; Hair - Blue hair'
  | 'Female; Type - E; Hair - 5; Solar Iris'
  | 'Male; Type - B; Hair - 5; Scar'
  | 'Male; Type - C; Hair - 5; Solar Iris'
  | 'Male; Type - E; Hair - 5; Solar Iris';

export type Headgear =
  | 'Fitted (light)'
  | 'Fitted (dark)'
  | 'Impact (light)'
  | 'Impact (dark)'
  | 'Pilot (light)'
  | 'Pilot (dark)'
  | 'Atlas Fitted'
  | 'Atlas Impact'
  | 'Atlas Pilot';

export type Mask =
  | 'Pollutant (light)'
  | 'Infectant (light)'
  | 'Respirator (light)'
  | 'Pollutant (dark)'
  | 'Infectant (dark)'
  | 'Respirator (dark)';

export type Glasses =
  | 'Aviator Square Green'
  | 'Steampunk Blue'
  | 'Eclipse Grey'
  | 'Steampunk Red'
  | 'Aviator Square Orange'
  | 'Eclipse Brown'
  | 'Atlas Avitator'
  | 'Atlas Retro'
  | 'Atlas Punk';

export type Microphone =
  | 'Standard (light)'
  | 'Directional (light)'
  | 'All Environment (light)'
  | 'Standard (dark)'
  | 'Directional (dark)'
  | 'All Environment (dark)';

export type Spacesuit =
  | 'Desert Tactical'
  | 'Desert Tactical with Sensors'
  | 'Space Tactical'
  | 'Space Tactical with Sensors'
  | 'Ranger Technician'
  | 'Ranger Technician with Sensors'
  | 'Transport Ranger'
  | 'Transport Ranger with Sensors'
  | 'Contamination Operator'
  | 'Contamination Operator with Sensors'
  | 'Terraformation Operator'
  | 'Terraformation Operator with Sensors'
  | 'Salvager Tactical'
  | 'Aerospace Tactical'
  | 'Robotic Ranger'
  | 'Specialized Transport Ranger'
  | 'Alliance Hazard Operator'
  | 'Marxco Terraformation Operator'
  | 'MSS Tactical'
  | 'MSS Ranger'
  | 'MSS Operator';

export type Visor =
  | 'Light'
  | 'Solar Diffusion'
  | 'Durable';
