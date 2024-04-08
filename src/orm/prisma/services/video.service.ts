import { PrismaClient } from '@prisma/client';
import { Video } from "src/core"; // Assurez-vous que le chemin d'importation est correct
import { PrismaGenericRepository } from "../generique-repo"; // Assurez-vous que le chemin d'importation est correct

export class VideoService extends PrismaGenericRepository<Video> {
    constructor(prismaClient: PrismaClient) {
        super(prismaClient, 'video');
    }

    private get client() {
        return this._client;
    }

    // Méthode pour récupérer des vidéos par tag
    async getVideosByTag(tag: string): Promise<Video[]> {
        return this.client.video.findMany({
            where: {
                tags: {
                    some: {
                        titre: tag
                    }
                }
            },
        });
    }

    // Méthode pour récupérer des vidéos par titre
    async searchVideos(searchString: string): Promise<Video[]> {
        return this.client.video.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: searchString,
                            mode: 'insensitive', // Pour une recherche insensible à la casse
                        },
                    },
                    {
                        description: {
                            contains: searchString,
                            mode: 'insensitive', // Pour une recherche insensible à la casse
                        },
                    },
                ],
            },
        });
    }
}
