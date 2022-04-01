import { Background, Glasses, Headgear, Mask, Microphone, Person, Spacesuit, Visor, WithRarity, WithoutRarity } from "./attribute-types";

export const backgrounds: WithRarity<Background> = {
  'MCLNY_Background_Cadet Blue.png': ['Cadet Blue', 'Common'],
  'MCLNY_Background_Explorer Purple.png': ['Explorer Purple', 'Rare'],
  'MCLNY_Background_Atlas Red.png': ['Atlas Red', 'Legendary'],
};

export const headgears: WithRarity<Headgear> = {
  'MCLNY_Headgear_Fitted (light).png': ['Fitted (light)', 'Common'],
  'MCLNY_Headgear_Fitted (dark).png': ['Fitted (dark)', 'Common'],
  'MCLNY_Headgear_Impact (light).png': ['Impact (light)', 'Common'],
  'MCLNY_Headgear_Impact (dark).png': ['Impact (dark)', 'Common'],
  'MCLNY_Headgear_Pilot (light).png': ['Pilot (light)', 'Common'],
  'MCLNY_Headgear_Pilot (dark).png': ['Pilot (dark)', 'Common'],
  'MCLNY_Headgear_Atlas Fitted (Legendary).png': ['Atlas Fitted', 'Legendary'],
  'MCLNY_Headgear_Atlas Impact (Legendary).png': ['Atlas Impact', 'Legendary'],
  'MCLNY_Headgear_Atlas Pilot (Legendary).png': ['Atlas Pilot', 'Legendary'],
};

export const masks: WithRarity<Mask> = {
  'MCLNY_Mask_Pollutant (light) (Rare).png': ['Pollutant (light)', 'Rare'],
  'MCLNY_Mask_StyleB_Infectant (light) (Rare).png': ['Infectant (light)', 'Rare'],
  'MCLNY_Mask_Respirator (light) (Rare).png': ['Respirator (light)', 'Rare'],
  'MCLNY_Mask_Pollutant (dark) (Legendary).png': ['Pollutant (dark)', 'Legendary'],
  'MCLNY_Mask_StyleB_Infectant (dark) (Legendary).png': ['Infectant (dark)', 'Legendary'],
  'MCLNY_Mask_Respirator (dark) (Legendary).png': ['Respirator (dark)', 'Legendary'],
}

export const glasses: WithRarity<Glasses> = {
  'MCLNY_Glasses_Aviator Square Green.png': ['Aviator Square Green', 'Common'],
  'MCLNY_Glasses_Steampunk Blue.png': ['Steampunk Blue', 'Common'],
  'MCLNY_Glasses_Eclipse Grey.png': ['Eclipse Grey', 'Common'],
  'MCLNY_Glasses_Steampunk Red (Rare).png': ['Steampunk Red', 'Rare'],
  'MCLNY_Glasses_Aviator Square Orange (Rare).png': ['Aviator Square Orange', 'Rare'],
  'MCLNY_Glasses_Eclipse Brown (Rare).png': ['Eclipse Brown', 'Rare'],
  'MCLNY_Glasses_Atlas Aviator (Legendary).png': ['Atlas Avitator', 'Legendary'],
  'MCLNY_Glasses_Atlas Retro (Legendary).png': ['Atlas Retro', 'Legendary'],
  'MCLNY_Glasses_Atlas Punk (Legendary).png': ['Atlas Punk', 'Legendary'],
}

export const microphones: WithRarity<Microphone> = {
  'MCLNY_Mic_Standard (light).png': ['Standard (light)', 'Common'],
  'MCLNY_Mic_Directional (light).png': ['Directional (light)', 'Common'],
  'MCLNY_Mic_All Environment (light).png': ['All Environment (light)', 'Common'],
  'MCLNY_Mic_Standard (dark).png': ['Standard (dark)', 'Legendary'],
  'MCLNY_Mic_Directional (dark).png': ['Directional (dark)', 'Legendary'],
  'MCLNY_Mic_All Environment (dark).png': ['All Environment (dark)', 'Legendary'],
}

export const spacesuits: WithRarity<Spacesuit> = {
  'MCLNY_SpaceSuit_Contamination Operator_StyleC.png': ['Contamination Operator', 'Common'],
  'MCLNY_SpaceSuit_Desert Tactical_StyleA.png': ['Desert Tactical', 'Common'],
  'MCLNY_SpaceSuit_Ranger Technician_StyleB.png': ['Ranger Technician', 'Common'],
  'MCLNY_SpaceSuit_Space Tactical_StyleA.png': ['Space Tactical', 'Common'],
  'MCLNY_SpaceSuit_Terraformation Operator_StyleC.png': ['Terraformation Operator', 'Common'],
  'MCLNY_SpaceSuit_Transport Ranger_StyleB.png': ['Transport Ranger', 'Common'],
  'MCLNY_SpaceSuit_Contamination Operator with sensors_StyleC.png': ['Contamination Operator with Sensors', 'Common'],
  'MCLNY_SpaceSuit_Desert Tactical with sensors_StyleA.png': ['Desert Tactical with Sensors', 'Common'],
  'MCLNY_SpaceSuit_Ranger Technician with sensors__StyleB.png': ['Ranger Technician with Sensors', 'Common'],
  'MCLNY_SpaceSuit_Space Tactical with sensors_StyleA.png': ['Space Tactical with Sensors', 'Common'],
  'MCLNY_SpaceSuit_Terraformation Operator with sensors_StyleC.png': ['Terraformation Operator with Sensors', 'Common'],
  'MCLNY_SpaceSuit_Transport Ranger with sensors_StyleB.png': ['Transport Ranger with Sensors', 'Common'],
  'MCLNY_SpaceSuit_Aerospace Tactical (Rare)_StyleA.png': ['Aerospace Tactical', 'Rare'],
  'MCLNY_SpaceSuit_Alliance Hazard Operator (Rare)_StyleC.png': ['Alliance Hazard Operator', 'Rare'],
  'MCLNY_SpaceSuit_Marxco Terraformation Operator (Rare)_StyleC.png': ['Marxco Terraformation Operator', 'Rare'],
  'MCLNY_SpaceSuit_Robotics Ranger (Rare)_StyleB.png': ['Robotic Ranger', 'Rare'],
  'MCLNY_SpaceSuit_Salvager Tactical (Rare)_StyleA.png': ['Salvager Tactical', 'Rare'],
  'MCLNY_SpaceSuit_Specialized Transport Ranger (Rare)_StyleB.png': ['Specialized Transport Ranger', 'Rare'],
  'MCLNY_SpaceSuit_MSS Operator (Legendary)_StyleC.png': ['MSS Operator', 'Legendary'],
  'MCLNY_SpaceSuit_MSS Ranger (Legendary)_StyleB.png': ['MSS Ranger', 'Legendary'],
  'MCLNY_SpaceSuit_MSS Tactical (Legendary)_StyleA.png': ['MSS Tactical', 'Legendary'],
}

export const visors: WithoutRarity<Visor> = {
  'MCLNY_HelmetVisor_Light.png': 'Light',
  'MCLNY_HelmetVisor_Solar Diffusion.png': 'Solar Diffusion',
  'MCLNY_HelmetVisor_Durable.png': 'Durable',
}

export const persons: WithRarity<Person> = {
  'MCLNY_Female_TypeA_Alpha 1.png':        ['Female; Type - A; Hair - 1', 'Common'],
  'MCLNY_Female_TypeA_Hair01_Alpha 1.png': ['Female; Type - A; Hair - 2', 'Common'],
  'MCLNY_Female_TypeA_Hair02_Alpha 1.png': ['Female; Type - A; Hair - 3', 'Common'],
  'MCLNY_Female_TypeB_Alpha 1.png':        ['Female; Type - B; Hair - 1', 'Common'],
  'MCLNY_Female_TypeB_Hair01_Alpha 1.png': ['Female; Type - B; Hair - 2', 'Common'],
  'MCLNY_Female_TypeB_Hair02_Alpha 1.png': ['Female; Type - B; Hair - 3', 'Common'],
  'MCLNY_Female_TypeC_Alpha 1.png':        ['Female; Type - C; Hair - 1', 'Common'],
  'MCLNY_Female_TypeC_Hair01_Alpha 1.png': ['Female; Type - C; Hair - 2', 'Common'],
  'MCLNY_Female_TypeC_Hair02_Alpha 1.png': ['Female; Type - C; Hair - 3', 'Common'],
  'MCLNY_Female_TypeD_Alpha 1.png':        ['Female; Type - D; Hair - 1', 'Common'],
  'MCLNY_Female_TypeD_Hair01_Alpha 1.png': ['Female; Type - D; Hair - 2', 'Common'],
  'MCLNY_Female_TypeD_Hair02_Alpha 1.png': ['Female; Type - D; Hair - 3', 'Common'],
  'MCLNY_Female_TypeE_Alpha 1.png':        ['Female; Type - E; Hair - 1', 'Common'],
  'MCLNY_Female_TypeE_Hair01_Alpha 1.png': ['Female; Type - E; Hair - 2', 'Common'],
  'MCLNY_Female_TypeE_Hair02_Alpha 1.png': ['Female; Type - E; Hair - 3', 'Common'],
  'MCLNY_Male_TypeA_Alpha 1.png':          ['Male; Type - A; Hair - 1', 'Common'],
  'MCLNY_Male_TypeA_Hair02_Alpha 1.png':   ['Male; Type - A; Hair - 2', 'Common'],
  'MCLNY_Male_TypeA_Hair03_Alpha 1.png':   ['Male; Type - A; Hair - 3', 'Common'],
  'MCLNY_Male_TypeB_Alpha 1.png':          ['Male; Type - B; Hair - 1', 'Common'],
  'MCLNY_Male_TypeB_Hair01_Alpha 1.png':   ['Male; Type - B; Hair - 2', 'Common'],
  'MCLNY_Male_TypeB_Hair02_Alpha 1.png':   ['Male; Type - B; Hair - 3', 'Common'],
  'MCLNY_Male_TypeC_Alpha 1.png':          ['Male; Type - C; Hair - 1', 'Common'],
  'MCLNY_Male_TypeC_Hair02_Alpha 1.png':   ['Male; Type - C; Hair - 2', 'Common'],
  'MCLNY_Male_TypeC_Hair03_Alpha 1.png':   ['Male; Type - C; Hair - 3', 'Common'],
  'MCLNY_Male_TypeD_Alpha 1.png':          ['Male; Type - D; Hair - 1', 'Common'],
  'MCLNY_Male_TypeD_Hair01_Alpha 1.png':   ['Male; Type - D; Hair - 2', 'Common'],
  'MCLNY_Male_TypeD_Hair02_Alpha 1.png':   ['Male; Type - D; Hair - 3', 'Common'],
  'MCLNY_Male_TypeE_Alpha 1.png':          ['Male; Type - E; Hair - 1', 'Common'],
  'MCLNY_Male_TypeE_Hair01_Alpha 1.png':   ['Male; Type - E; Hair - 2', 'Common'],
  'MCLNY_Male_TypeE_Hair02_Alpha 1.png':   ['Male; Type - E; Hair - 3', 'Common'],
  'MCLNY_Female_TypeA_Hair03_Alpha 1.png': ['Female; Type - A; Hair - 4', 'Rare'],
  'MCLNY_Female_TypeB_Hair03_Alpha 1.png': ['Female; Type - B; Hair - 4', 'Rare'],
  'MCLNY_Female_TypeC_Hair03_Alpha 1.png': ['Female; Type - C; Hair - 4', 'Rare'],
  'MCLNY_Female_TypeD_Hair03_Alpha 1.png': ['Female; Type - D; Hair - 4', 'Rare'],
  'MCLNY_Female_TypeE_Hair03_Alpha 1.png': ['Female; Type - E; Hair - 4', 'Rare'],
  'MCLNY_Male_TypeA_Hair01_Alpha 1.png':   ['Male; Type - A; Hair - 4', 'Rare'],
  'MCLNY_Male_TypeB_Hair03_Alpha 1.png':   ['Male; Type - B; Hair - 4', 'Rare'],
  'MCLNY_Male_TypeC_Hair01_Alpha 1.png':   ['Male; Type - C; Hair - 4', 'Rare'],
  'MCLNY_Male_TypeD_Bald02_Alpha 1.png':   ['Male; Type - D; Hair - 4', 'Rare'],
  'MCLNY_Male_TypeE_Hair03_Alpha 1.png':   ['Male; Type - E; Hair - 4', 'Rare'],
  'MCLNY_Female_TypeA_Alpha_Legendary 1.png': ['Female; Type - A; Hair - Pink hair', 'Legendary'],
  'MCLNY_Female_TypeC_Alpha_Legendary 1.png': ['Female; Type - C; Hair - Blue hair', 'Legendary'],
  'MCLNY_Female_TypeE_Alpha_Legendary 1.png': ['Female; Type - E; Hair - 5; Solar Iris', 'Legendary'],
  'MCLNY_Male_TypeB_Alpha_Legendary 1.png':   ['Male; Type - B; Hair - 5; Scar', 'Legendary'],
  'MCLNY_Male_TypeC_Alpha_Legendary 1.png':   ['Male; Type - C; Hair - 5; Solar Iris', 'Legendary'],
  'MCLNY_Male_TypeE__Alpha_Legendary 1.png':  ['Male; Type - E; Hair - 5; Solar Iris', 'Legendary'],
};

