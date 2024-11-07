import { getRandomItem } from '@tuskdesign/utils';

export type Animal = {
  name: string;
  sound: string;
};

export const ANIMALS = [
  {
    name: "dogsss",
    sound: "bark",
  },
  {
    name: "cat",
    sound: "meow",
  },
  {
    name: "cow",
    sound: "moo",
  },
  {
    name: "rooster",
    sound: "cock-a-doodle-doo",
  },
  {
    name: "pig",
    sound: "oink",
  },
];

export function getRandomAnimal() {
  return getRandomItem(ANIMALS);
}
