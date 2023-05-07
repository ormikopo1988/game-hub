import APIClient from "./api-client";
import { Platform } from "./platformService";

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
}

export default new APIClient<Game>("/games");
