/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { UserUseCases } from '../use-cases/user/user.use-case.ts';

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) { }

  @Get()
  async getAll() {
    return this.userUseCases.getAllUsers();
  }
  @Get(':username')
  async getByUsername(@Param('username') username: any) {
    return this.userUseCases.getUserByUsername(username);

  }
  @Get(':roleName')
  async getByRoleName(@Param('role') role: any) {
    return this.userUseCases.getUsersByRoleName(role);
  }

  @Get(':roleId')
  async getByRoles(@Param('id') id: any) {
    return this.userUseCases.getUserById(id);
  }
}
