import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TagUseCases } from '../use-cases/tag/tag.use-case';
import { CreateTagDto, UpdateTagDto } from 'src/core/dtos/tag.dto';

@ApiTags('tag')
@Controller('api/tag')
export class TagController {
  constructor(private tagUseCases: TagUseCases) { }

  @Get()
  @ApiOperation({ summary: 'Récupère tous les tags' })
  @ApiResponse({ status: 200, description: 'Renvoie tous les tags existants.' })
  async getAll() {
    return this.tagUseCases.getAllTags();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un tag par son ID' })
  @ApiResponse({ status: 200, description: 'Renvoie les détails du tag spécifié.' })
  @ApiResponse({ status: 404, description: 'Tag non trouvé.' })
  @ApiParam({ name: 'id', description: "ID du tag", type: String })
  async getTagById(@Param('id') id: string) {
    return this.tagUseCases.getTagById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crée un nouveau tag' })
  @ApiResponse({ status: 201, description: 'Le tag a été créé avec succès.' })
  async postTag(@Body() tag: CreateTagDto) {
    return this.tagUseCases.createTag(tag);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Met à jour un tag existant' })
  @ApiResponse({ status: 200, description: 'Le tag a été mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Tag non trouvé.' })
  @ApiParam({ name: 'id', description: "ID du tag pour mise à jour", type: String })
  async putTag(@Param('id') id: string, @Body() tag: UpdateTagDto) {
    return this.tagUseCases.updateTag(id, tag);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un tag' })
  @ApiResponse({ status: 200, description: 'Le tag a été supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Tag non trouvé.' })
  @ApiParam({ name: 'id', description: "ID du tag à supprimer", type: String })
  async deleteTag(@Param('id') id: string) {
    return this.tagUseCases.deleteTag(id);
  }

  // Attention : Cette route peut entrer en conflit avec `getTagById` car elles ont le même motif de chemin. 
  // Considérez d'utiliser un chemin différent ou un autre paramètre de requête pour éviter le conflit.
  @Get('search/:title')
  @ApiOperation({ summary: 'Recherche les tags par titre' })
  @ApiResponse({ status: 200, description: 'Renvoie les tags correspondant au titre donné.' })
  @ApiParam({ name: 'title', description: "Titre du tag pour la recherche", type: String })
  async getTagsByTitle(@Param('title') title: string) {
    return this.tagUseCases.getTagsByTitle(title);
  }
}
