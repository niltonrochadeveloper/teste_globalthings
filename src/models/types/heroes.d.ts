import { CategoryProps } from "./category";

export interface Heroes {
  Id: number;
  Name: string;
  Active: boolean;
  Category: CategoryProps;
}

export interface HeroesProps {
  heroes: HeroesProps[];
}
