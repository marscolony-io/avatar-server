import { backgrounds, persons } from './attribute-adapter';
import { attribute, Background, Gender, Person, Profession, Rarity } from './attribute-types';
import DataJson from './attributes.json';

export const attributes: Attributes[] = [];

export type Attributes = {
  gender: Gender;
  profession: Profession;
  background: [Background, Rarity];
  person: [Person, Rarity];
  // headgear: Headgear;
  // mask: Mask;
  // glasses: Glasses;
  // microphone: Microphone;
  // spacesuit: Spacesuit;
  // visor: Visor;
}

for (const index of Object.keys(DataJson)) {
  const gender: Gender = DataJson[index].Gender;
  const profession: Profession = DataJson[index].Profession;
  const background: [Background, Rarity] = backgrounds[DataJson[index].Attributes_Path.Background.split('/').at(-1)];
  const person: [Person, Rarity] = persons[DataJson[index].Attributes_Path.Face.split('/').at(-1)];

  const item: Attributes = {
    gender,
    profession,
    background,
    person,
  }
  attributes[parseInt(index) - 1] = item;
}

export const getAttributes = (id: number): Record<string, unknown> => {
  const data = attributes[id];
  return {
    name: `Martian Colonist ${id}`,
    description: `Martian Colonist ${id}`,
    image: 'https://' + process.env.TESTNET ? 'meta-avatar-test' : 'meta-avatar' + '.marscolony.io/' + id + '.jpg',
    attributes: [
      attribute('Profession', data.profession ?? 'Error'),
      attribute('Background', data.background ? data.background[0] + ': ' + data.background[1] : 'Error'),
      attribute('Person', data.person ? data.person[0] + ': ' + data.person[1] : 'Error'),
    ],
  };
};
