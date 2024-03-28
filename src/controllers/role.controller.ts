/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Put } from '@nestjs/common';
import { RoleUseCases } from '../use-cases/role/role.use-case.ts';
import { CreateRoleDto } from 'src/core/dtos/role.dto.js';

@Controller('api/role')
export class RoleController {
    constructor(private roleUseCases: RoleUseCases) { }

    @Get()
    async getAllRoles() {
        return this.roleUseCases.getAllRoles();
    }
    @Put()
    async putRole(@Body() role: CreateRoleDto) {
        return this.roleUseCases.putRole(role);
    }

}
