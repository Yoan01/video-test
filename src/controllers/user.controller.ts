import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserUseCases } from '../use-cases/user/user.use-case';
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos/user.dto';

@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) { }

  @Get()
  async getAll() {
    return this.userUseCases.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.userUseCases.getUserById(id);
  }

  @Post()
  async postUser(@Body() user: CreateUserDto) {
    return this.userUseCases.createUser(user);
  }

  @Put(':id')
  async putUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userUseCases.updateUser(id, user);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userUseCases.deleteUser(id);
  }
  
  @Get(':roleName')
  async getByRoleName(@Param('role') role: any) {
    return this.userUseCases.getUsersByRoleName(role);
  }
}