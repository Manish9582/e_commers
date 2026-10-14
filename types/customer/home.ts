import type { IconType } from "react-icons";

export type LinkButtonProps = {
  title: string;
  style?: string;
  url: string;
  icon?: IconType;
};

export type FunButtonProps = {
  title: string;
  style?: string;
  fun: () => void;
};

export type TypesOfItems = {
  id: string | number;
  name: string;
  slug: string;
  type: string;
  description: string;
  image: string;
};
