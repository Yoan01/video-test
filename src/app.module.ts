import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './use-cases/user/user.module';
import { VideoModule } from './use-cases/video/video.module';
import { TagModule } from './use-cases/tag/tag.module';
import { RoleModule } from './use-cases/role/role.module';
import { TagController } from './controllers/tag.controller';
import { RoleController } from './controllers/role.controller';
import { VideoController } from './controllers/video.controller';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [VideoModule, UserModule, TagModule, RoleModule],
  controllers: [AppController, UserController, VideoController, RoleController, TagController],
  providers: [AppService],
})
export class AppModule {}
