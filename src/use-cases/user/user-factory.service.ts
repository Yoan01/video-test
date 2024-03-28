import { Injectable } from '@nestjs/common';
import { User } from '../../core/entities'; // Assuming the existence of a User entity
import { CreateUserDto, UpdateUserDto } from '../../core/dtos';

@Injectable()
export class UserFactoryService {
    createNewUser(createUserDto: CreateUserDto) {
        const newUser = new User();
        newUser.password = createUserDto.password;
        newUser.username = createUserDto.username;
        newUser.role = createUserDto.role;
        newUser.roleId = createUserDto.roleId;

        return newUser;
    }

    updateUser(updateUserDto: UpdateUserDto) {
        const newUser = new User();
        newUser.password = updateUserDto.password;
        newUser.username = updateUserDto.username;
        newUser.role = updateUserDto.role;
        newUser.roleId = updateUserDto.roleId;

        return newUser;
    }
}
