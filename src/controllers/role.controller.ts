import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoleUseCases } from '../use-cases/role/role.use-case';
import { CreateRoleDto, UpdateRoleDto } from 'src/core/dtos/role.dto';

@Controller('api/role')
export class RoleController {
    constructor(private roleUseCases: RoleUseCases) { }

    @Get()
    async getAll() {
        return this.roleUseCases.getAllRoles();
    }

    @Get(':id')
    async getRoleById(@Param('id') id: string) {
        return this.roleUseCases.getRoleById(id);
    }

    @Post()
    async postRole(@Body() role: CreateRoleDto) {
        return this.roleUseCases.createRole(role);
    }

    @Put(':id')
    async putRole(@Param('id') id: string, @Body() role: UpdateRoleDto) {
        return this.roleUseCases.updateRole(id, role);
    }

    @Delete(':id')
    async deleteRole(@Param('id') id: string) {
        return this.roleUseCases.deleteRole(id);
    }
}
