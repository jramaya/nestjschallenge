import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiService } from './api/api.service';
import { V2Controller } from './v2/v2.controller';

@Module({
  imports: [],
  controllers: [AppController, V2Controller],
  providers: [ApiService],
})
export class AppModule {}
