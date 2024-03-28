import { Injectable } from '@nestjs/common';
import { Role } from '../../core/entities'; // Assuming the existence of a Role entity similar to Tag
import { CreateRoleDto, UpdateRoleDto } from '../../core/dtos';

@Injectable()
export class RoleFactoryService {
    createNewRole(createRoleDto: CreateRoleDto) {
        const newRole = new Role();
        newRole.titre = createRoleDto.titre;
        newRole.description = createRoleDto.description;
        newRole.users = createRoleDto.users;

        return newRole;
    }

    updateRole(updateRoleDto: UpdateRoleDto) {
        const newRole = new Role();

        
            newRole.titre = updateRoleDto.titre;
        
        
            newRole.description = updateRoleDto.description;
        
        
            newRole.users = updateRoleDto.users;
        

        return newRole;
    }

}
