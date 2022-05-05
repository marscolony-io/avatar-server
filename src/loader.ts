import * as adapterMainnet from './attribute-adapter';
import * as adapterTestnet from './attribute-adapter-testnet';
import { attribute, Background, Gender, Person, Profession, Rarity, Mask, Headgear, Glasses, Microphone, Spacesuit, Visor } from './attribute-types';
import DataJsonMainnet from './attributes-mainnet.json';
import DataJsonTestnet from './attributes-testnet.json';
import { avatarImage } from './helper';
import { names, xps } from './name-xp-service';
import { xpToLevel } from './xpToLevel';

const DataJson = process.env.TESTNET ? DataJsonTestnet : DataJsonMainnet;
const { backgrounds, persons, masks, headgears, spacesuits, visors, microphones, glasses } = process.env.TESTNET ? adapterTestnet : adapterMainnet;

export const attributes: Attributes[] = [];

export type Attributes = {
  gender: Gender;
  profession: Profession;
  background: [Background, Rarity];
  person: [Person, Rarity];
  headgear: [Headgear, Rarity];
  mask: [Mask, Rarity];
  glasses: [Glasses, Rarity];
  microphone: [Microphone, Rarity];
  spacesuit: [Spacesuit, Rarity];
  visor: Visor;
}

for (const index of Object.keys(DataJson)) {
  const gender: Gender = DataJson[index].Gender;
  const profession: Profession = DataJson[index].Profession;
  const background: [Background, Rarity] = backgrounds[DataJson[index].Attributes_Path.Background.split('/').at(-1)];
  const person: [Person, Rarity] = persons[DataJson[index].Attributes_Path.Face.split('/').at(-1)];
  const headgear: [Headgear, Rarity] = headgears[DataJson[index].Attributes_Path.Headgear.split('/').at(-1)];
  const mask: [Mask, Rarity] = masks[DataJson[index].Attributes_Path.Mask.split('/').at(-1)];
  const glass: [Glasses, Rarity] = glasses[DataJson[index].Attributes_Path.Glass.split('/').at(-1)];
  const microphone: [Microphone, Rarity] = microphones[DataJson[index].Attributes_Path.Mic.split('/').at(-1)];
  const spacesuit: [Spacesuit, Rarity] = spacesuits[DataJson[index].Attributes_Path.Suit.split('/').at(-1)];
  const visor: Visor = visors[DataJson[index].Attributes_Path.Visor.split('/').at(-1)];

  const item: Attributes = {
    gender,
    profession,
    background,
    person,
    headgear,
    mask,
    glasses: glass,
    microphone,
    spacesuit,
    visor
  }
  attributes[parseInt(index)] = item;
}

export const getAttributes = (id: number): Record<string, unknown> => {
  const data = attributes[id];
  return {
    name: `Martian Colonist ${id}`,
    description: `This is the Martian Colonist ${id} (${data.background[1] ?? "Error"}) made by marscolony.io. This one is the part of the 21000 avatar NFTs who became the first generation to land on Mars. With it, you're ready to build the colonies and perform missions on Mars.`,
    image: avatarImage(id),
    attributes: [
      attribute('Name', names[id] ?? `No Name #${id}`),
      xps[id] ? attribute('XP', xps[id].toString()) : null,
      xps[id] ? attribute('Level', xpToLevel(xps[id]).toString()) : null,
      attribute('Profession', data.profession ?? 'Error'),
      attribute('Background', data.background ? (data.background[0] + ': ' + data.background[1]) : 'Error'),
      attribute('Human', data.person ? (data.person[0] + ': ' + data.person[1]) : 'Error'),
      attribute('Headgear', data.headgear ? (data.headgear[0] + ': ' + data.headgear[1]) : 'Error'),
      attribute('Mask', data.mask ? (data.mask[0] + ': ' + data.mask[1]) : ( data.mask == undefined ? 'None' : 'Error')),
      attribute('Shades', data.glasses ? (data.glasses[0] + ': ' + data.glasses[1]) : ( data.glasses == undefined ? 'None' : 'Error')),
      attribute('Microphone', data.microphone ? (data.microphone[0] + ': ' + data.microphone[1]) : 'Error'),
      attribute('Spacesuit', data.spacesuit ? (data.spacesuit[0] + ': ' + data.spacesuit[1]) : 'Error'),
      attribute('Visor', data.visor ?? 'Error'),
    ].filter((item) => item !== null),
  };
};
