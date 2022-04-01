import { Background, Glasses, Headgear, Mask, Microphone, Person, Spacesuit, Visor, WithRarity, WithoutRarity } from "./attribute-types";

export const backgrounds: WithRarity<Background> = {
  'MCLNY_Background_StyleA_Blue 1.png': ['Cadet Blue', 'Common'],
  'MCLNY_Background_StyleA_Purple 1.png': ['Explorer Purple', 'Rare'],
  'MCLNY_Background_StyleA_Violet 1.png': ['Atlas Red', 'Legendary'],
};

export const headgears: WithRarity<Headgear> = {
  'MCLNY_Headgear_StyleA_Light_Alpha 1.png': ['Fitted (light)', 'Common'],
  'MCLNY_Headgear_StyleA_Dark_Alpha 1.png': ['Fitted (dark)', 'Common'],
  'MCLNY_Headgear_StyleB_Light_Alpha 1.png': ['Impact (light)', 'Common'],
  'MCLNY_Headgear_StyleB_Dark_Alpha 1.png': ['Impact (dark)', 'Common'],
  'MCLNY_Headgear_StyleC_Light_Alpha 1.png': ['Pilot (light)', 'Common'],
  'MCLNY_Headgear_StyleC_Dark_Alpha 1.png': ['Pilot (dark)', 'Common'],
  'MCLNY_Headgear_StyleA_Dark_Alpha 2.png': ['Atlas Fitted', 'Legendary'],
  'MCLNY_Headgear_StyleB_Dark_Alpha 2.png': ['Atlas Impact', 'Legendary'],
  'MCLNY_Headgear_StyleC_Dark_Alpha 2.png': ['Atlas Pilot', 'Legendary'],
};

export const masks: WithRarity<Mask> = {
  'MCLNY_Mask_StyleA_Civilian 1.png': ['Pollutant (light)', 'Rare'],
  'MCLNY_Mask_StyleB_Civilian 1.png': ['Infectant (light)', 'Rare'],
  'MCLNY_Mask_StyleC_Civilian 1.png': ['Respirator (light)', 'Rare'],
  'MCLNY_Mask_StyleA_Dark_Civilian 1.png': ['Pollutant (dark)', 'Legendary'],
  'MCLNY_Mask_StyleB_Dark_Civilian 1.png': ['Infectant (dark)', 'Legendary'],
  'MCLNY_Mask_StyleC_Dark_Civilian 1.png': ['Respirator (dark)', 'Legendary'],
}

export const glasses: WithRarity<Glasses> = {
  'MCLNY_Glasses_StyleB_Green 1.png': ['Aviator Square Green', 'Common'],
  'MCLNY_Glasses_StyleA_Blue 1.png': ['Steampunk Blue', 'Common'],
  'MCLNY_Glasses_StyleC_Brown 1.png': ['Eclipse Grey', 'Common'],
  'MCLNY_Glasses_StyleA_Red 1.png': ['Steampunk Red', 'Rare'],
  'MCLNY_Glasses_StyleB_Yellow 1.png': ['Aviator Square Orange', 'Rare'],
  'MCLNY_Glasses_StyleC_BrownDark 1.png': ['Eclipse Brown', 'Rare'],
  'MCLNY_Glasses_StyleD_Black 1.png': ['Atlas Avitator', 'Legendary'],
  'MCLNY_Glasses_StyleE_Transparent 1.png': ['Atlas Retro', 'Legendary'],
  'MCLNY_Glasses_StyleF_Purple 1.png': ['Atlas Punk', 'Legendary'],
}

export const microphones: WithRarity<Microphone> = {
  'MCLNY_Mic_StyleA 1.png': ['Standard (light)', 'Common'],
  'MCLNY_Mic_StyleB 1.png': ['Directional (light)', 'Common'],
  'MCLNY_Mic_StyleC 1.png': ['All Environment (light)', 'Common'],
  'MCLNY_Mic_StyleA_Dark 1.png': ['Standard (dark)', 'Legendary'],
  'MCLNY_Mic_StyleB_Dark 1.png': ['Directional (dark)', 'Legendary'],
  'MCLNY_Mic_StyleC_Dark 1.png': ['All Environment (dark)', 'Legendary'],
}

export const spacesuits: WithRarity<Spacesuit> = {
  'MCLNY_SpaceSuit_StyleA01_RedGreen_AlphaY 1.png': ['Desert Tactical', 'Common'],
  'MCLNY_SpaceSuit_StyleA02_RedGreen_AlphaX 1.png': ['Desert Tactical with Sensors', 'Common'],
  'MCLNY_SpaceSuit_StyleA01_BlueRed_AlphaX 1.png': ['Space Tactical', 'Common'],
  'MCLNY_SpaceSuit_StyleA02_BlueRed_AlphaX 1.png': ['Space Tactical with Sensors', 'Common'],
  'MCLNY_SpaceSuit_StyleB01_OrangeTeal_Alpha 1.png': ['Ranger Technician', 'Common'],
  'MCLNY_SpaceSuit_StyleB02_OrangeTeal_Alpha 1.png': ['Ranger Technician with Sensors', 'Common'],
  'MCLNY_SpaceSuit_StyleB01_TealRed_Alpha 1.png': ['Transport Ranger', 'Common'],
  'MCLNY_SpaceSuit_StyleB02_TealRed_Alpha 1.png': ['Transport Ranger with Sensors', 'Common'],
  'MCLNY_SpaceSuit_StyleC01_YellowGreen_Alpha 1.png': ['Contamination Operator', 'Common'],
  'MCLNY_SpaceSuit_StyleC02_YellowGreen_Alpha 1.png': ['Contamination Operator with Sensors', 'Common'],
  'MCLNY_SpaceSuit_StyleC01_VioletRed_Alpha 1.png': ['Terraformation Operator', 'Common'],
  'MCLNY_SpaceSuit_StyleC02_VioletRed_Alpha 1.png': ['Terraformation Operator with Sensors', 'Common'],
  'MCLNY_SpaceSuit_StyleA02_RedGreen_Alpha_RareX 1.png': ['Salvager Tactical', 'Rare'],
  'MCLNY_SpaceSuit_StyleA02_BlueRed_Alpha_RareX 1.png': ['Aerospace Tactical', 'Rare'],
  'MCLNY_SpaceSuit_StyleB02_OrangeTeal_Alpha_Rare 1.png': ['Robotic Ranger', 'Rare'],
  'MCLNY_SpaceSuit_StyleB02_TealRed_Alpha_Rare 1.png': ['Specialized Transport Ranger', 'Rare'],
  'MCLNY_SpaceSuit_StyleC02_YellowGreen_Alpha_Rare 1.png': ['Alliance Hazard Operator', 'Rare'],
  'MCLNY_SpaceSuit_StyleC02_VioletRed_Alpha_rare 1.png': ['Marxco Terraformation Operator', 'Rare'],
  'MCLNY_SpaceSuit_StyleA03_Alpha_LegendaryX 1.png': ['MSS Tactical', 'Legendary'],
  'MCLNY_SpaceSuit_StyleB03_Alpha_Legendary 1.png': ['MSS Ranger', 'Legendary'],
  'MCLNY_SpaceSuit_StyleC03_Alpha_Legendary 1.png': ['MSS Operator', 'Legendary'],
}

export const visors: WithoutRarity<Visor> = {
  'MCLNY_SpacesuitHelmetVisor_StyleA_o75 2.png': 'Light',
  'MCLNY_SpacesuitHelmetVisor_StyleB_Updated 1.png': 'Solar Diffusion',
  'MCLNY_SpacesuitHelmetVisor_StyleC_Updated 1.png': 'Durable',
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
