import { Controller, Get } from '@nestjs/common';

@Controller('api/role')
export class RoleController {

    @Get(":id")
    async getRole() {
        return "getRole";
    }
}