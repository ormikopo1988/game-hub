import { Platform } from "./Platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  description_raw: string;
}
