/* eslint-disable prettier/prettier */
import { Video } from "./video.entity";

export class Tag {
  id: string;
  titre: string;
  video: Video[];
}
