import { CategoryProps } from "./category";

export interface Heroes {
  Id: number;
  Name: string;
  Active: boolean;
  Category: CategoryProps;
}

export interface CreateHeroes extends Pick<Heroes, "Name" | "Active"> {
  CategoryId: number;
}

export interface HeroesProps {
  heroes: HeroesProps[];
}
