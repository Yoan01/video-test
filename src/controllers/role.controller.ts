import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RoleUseCases } from '../use-cases/role/role.use-case';
import { CreateRoleDto, UpdateRoleDto } from 'src/core/dtos/role.dto';

@ApiTags('role')
@Controller('api/role')
export class RoleController {
    constructor(private roleUseCases: RoleUseCases) { }

    @Get()
    @ApiOperation({ summary: 'Récupère tous les rôles' })
    @ApiResponse({ status: 200, description: 'Renvoie tous les rôles existants.' })
    async getAll() {
        return this.roleUseCases.getAllRoles();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Récupère un rôle par son ID' })
    @ApiResponse({ status: 200, description: 'Renvoie les détails du rôle spécifié.' })
    @ApiResponse({ status: 404, description: 'Rôle non trouvé.' })
    async getRoleById(@Param('id') id: string) {
        return this.roleUseCases.getRoleById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crée un nouveau rôle' })
    @ApiResponse({ status: 201, description: 'Le rôle a été créé avec succès.' })
    @ApiResponse({ status: 400, description: 'Requête invalide.' })
    async postRole(@Body() role: CreateRoleDto) {
        return this.roleUseCases.createRole(role);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Met à jour un rôle existant' })
    @ApiResponse({ status: 200, description: 'Le rôle a été mis à jour avec succès.' })
    @ApiResponse({ status: 404, description: 'Rôle non trouvé.' })
    async putRole(@Param('id') id: string, @Body() role: UpdateRoleDto) {
        return this.roleUseCases.updateRole(id, role);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Supprime un rôle' })
    @ApiResponse({ status: 200, description: 'Le rôle a été supprimé avec succès.' })
    @ApiResponse({ status: 404, description: 'Rôle non trouvé.' })
    async deleteRole(@Param('id') id: string) {
        return this.roleUseCases.deleteRole(id);
    }
}
