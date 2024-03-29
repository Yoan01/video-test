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
    async getVideoByTitle(title: string): Promise<Video[]> {
        return this.client.video.findMany({
            where: {
                title: {
                    contains: title,
                },
            },
        });
    }

    // Méthode pour récupérer des vidéos par description
    async getVideoByDescription(description: string): Promise<Video[]> {
        return this.client.video.findMany({
            where: {
                description: {
                    contains: description,
                },
            },
        });
    }

    // Méthode pour récupérer des vidéos par description courte
    async getVideoByShortDescription(shortDescription: string): Promise<Video[]> {
        return this.client.video.findMany({
            where: {
                shortDescription: {
                    contains: shortDescription,
                },
            },
        });
    }
}
