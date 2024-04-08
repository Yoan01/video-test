import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserUseCases } from '../use-cases/user/user.use-case';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos/user.dto';

@ApiTags('user')
@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) { }

  @Get()
  @ApiOperation({ summary: 'Récupère tous les utilisateurs' })
  @ApiResponse({ status: 200, description: 'Renvoie une liste de tous les utilisateurs.' })
  async getAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupère un utilisateur par son ID' })
  @ApiResponse({ status: 200, description: 'Renvoie les détails de l’utilisateur spécifié.' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé.' })
  @ApiParam({ name: 'id', type: String, description: "ID de l'utilisateur" })
  async getUserById(@Param('id') id: string) {
    return this.userUseCases.getUserById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crée un nouvel utilisateur' })
  @ApiResponse({ status: 201, description: 'L’utilisateur a été créé avec succès.' })
  async postUser(@Body() user: CreateUserDto) {
    return this.userUseCases.createUser(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Met à jour un utilisateur existant' })
  @ApiResponse({ status: 200, description: 'L’utilisateur a été mis à jour avec succès.' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé.' })
  @ApiParam({ name: 'id', type: String, description: "ID de l'utilisateur pour mise à jour" })
  async putUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userUseCases.updateUser(id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprime un utilisateur' })
  @ApiResponse({ status: 200, description: 'L’utilisateur a été supprimé avec succès.' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé.' })
  @ApiParam({ name: 'id', type: String, description: "ID de l'utilisateur à supprimer" })
  async deleteUser(@Param('id') id: string) {
    return this.userUseCases.deleteUser(id);
  }

  // Supposons que nous modifions cette route pour éviter un conflit avec getUserById
  @Get('role/:roleName')
  @ApiOperation({ summary: 'Récupère les utilisateurs par nom de rôle' })
  @ApiResponse({ status: 200, description: 'Renvoie les utilisateurs ayant le rôle spécifié.' })
  @ApiParam({ name: 'roleName', type: String, description: 'Nom du rôle' })
  async getByRoleName(@Param('roleName') role: string) {
    return this.userUseCases.getUsersByRoleName(role);
  }

  // Ajout d'une route pour la recherche d'utilisateurs par nom d'utilisateur
  @Get('search/:username')
  @ApiOperation({ summary: 'Recherche les utilisateurs par nom d’utilisateur' })
  @ApiResponse({ status: 200, description: 'Renvoie les utilisateurs contenant un nom d’utilisateur donné.' })
  @ApiParam({ name: 'username', type: String, description: 'Nom d’utilisateur pour la recherche' })
  async getUsersByUsername(@Param('username') username: string) {
    return this.userUseCases.searchUsers(username);
  }


}