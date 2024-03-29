import { Tag } from "./tag.entity";
export class Video {

  id: string;
  name: string;
  title: string;
  shortDescription: string;
  description: string;
  tags?: Tag[];
  tagId: string;

}
