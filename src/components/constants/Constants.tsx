export type Hall = {
  id: number;
  title: string;
  url: string;
  description?: string;
};

export type InfoSheet = {
  name: string;
  information: string[];
  about: string[][];
  hall: Hall;
  connect: string[][];
  more?: string[];
};

export const MenuList: string[] = [
  "introduction",
  "about",
  "hall",
  "connect",
  "more",
];
