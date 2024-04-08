import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { VideoUseCases } from '../use-cases/video/video.use-case';
import { CreateVideoDto, UpdateVideoDto } from 'src/core/dtos/video.dto';

@ApiTags('video')
@Controller('api/video')
export class VideoController {
  constructor(private videoUseCases: VideoUseCases) { }

  @Get()
  @ApiOperation({ summary: 'Récupère tous les vidéos' })
  @ApiResponse({ status: 200, description: 'Renvoie tous les vidéos.' })
  async getAll() {
    return this.videoUseCases.getAllVideos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un vidéo par son ID' })
  @ApiResponse({ status: 200, description: 'Renvoie le vidéo demandé.' })
  @ApiResponse({ status: 404, description: 'Vidéo non trouvé.' })
  @ApiParam({ name: 'id', type: String, description: 'ID du vidéo' })
  async getVideoById(@Param('id') id: string) {
    return this.videoUseCases.getVideoById(id);
  }

  // Notez que j'ai supprimé le ':id' du décorateur @Post, cela semble être une erreur.
  @Post()
  @ApiOperation({ summary: 'Crée un nouveau vidéo' })
  @ApiResponse({ status: 201, description: 'Le vidéo a été créé.' })
  async postVideo(@Body() video: CreateVideoDto) {
    return this.videoUseCases.createVideo(video);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Met à jour un vidéo' })
  @ApiResponse({ status: 200, description: 'Le vidéo a été mis à jour.' })
  @ApiResponse({ status: 404, description: 'Vidéo non trouvé.' })
  @ApiParam({ name: 'id', type: String, description: 'ID du vidéo à mettre à jour' })
  async putVideo(@Param('id') id: string, @Body() video: UpdateVideoDto) {
    return this.videoUseCases.updateVideo(id, video);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un vidéo' })
  @ApiResponse({ status: 200, description: 'Le vidéo a été supprimé.' })
  @ApiResponse({ status: 404, description: 'Vidéo non trouvé.' })
  @ApiParam({ name: 'id', type: String, description: 'ID du vidéo à supprimer' })
  async deleteVideo(@Param('id') id: string) {
    return this.videoUseCases.deleteVideo(id);
  }

  // Pour éviter les conflits de route, utilisez des chemins spécifiques pour les filtres.
  @Get('tag/:tag')
  @ApiOperation({ summary: 'Récupère les vidéos par tag' })
  @ApiResponse({ status: 200, description: 'Renvoie les vidéos avec le tag spécifié.' })
  @ApiParam({ name: 'tag', type: String, description: 'Tag pour la recherche de vidéo' })
  async getVideoByTag(@Param('tag') tag: string) {
    return this.videoUseCases.getVideosByTag(tag);
  }

  @Get('search/:searchString')
  @ApiOperation({ summary: 'Recherche les vidéos par titre ou description' })
  @ApiResponse({ status: 200, description: 'Renvoie les vidéos correspondant à la recherche.' })
  @ApiParam({ name: 'searchString', type: String, description: 'Chaîne de recherche' })
  async searchVideos(@Param('searchString') searchString: string) {
    return this.videoUseCases.searchVideos(searchString);
  }
  // Appliquez la même logique pour les autres méthodes de filtrage.
}
