import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  slug: string;
  name: string;
  released: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  rating: number;
  rating_top: number;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  description_raw: string;
}
