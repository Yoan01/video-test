import { Video } from "./video.entity";

export class Tag {
  id: string;
  titre: string;
  videos?: Video[];
}
